import React, { Component, ChangeEvent } from "react";
import "./admin.css";
import { store } from "../../redux/store";
import { Unsubscribe } from "redux";
import { VacationModel } from "../../models/vacation-model";
import { ActionType } from "../../redux/action-type";
import API from '../../api'
import { Config } from "../../config";
import Button from 'react-bootstrap/Button';


interface VacationsState {
    vacation: VacationModel;
    vacations: VacationModel[];
    errors: {
        destinationError: String,
        descriptionError: String,
        startDateError: String,
        endDateError: String,
        priceError: String,
    }
}

export class Admin extends Component<any, VacationsState> {
    private unsubscribeStore: Unsubscribe;

    public constructor(props: any) {
        super(props);
        this.state = {
            vacations: [],
            vacation: new VacationModel(),
            errors: {
                destinationError: " *",
                descriptionError: " *",
                startDateError: " *",
                endDateError:" *",
                priceError:" *"
            }
        }

        this.unsubscribeStore = store.subscribe(() => {
            const vacations = store.getState().vacations;
            this.setState({ vacations });
        });
    }

    public async componentDidMount() {
        try {
            //Go to server on this url and bring the vacations
            const response = await API.get<VacationModel[]>(Config.serverUrl + "/api/vacations", { withCredentials: true });
            const vacations = response.data;
            store.dispatch({ type: ActionType.getAllVacations, payload: vacations });
            // this.setState({ vacations }); 
        }
        catch (err) {
            alert(err.message);
        }
    }


    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    public setDestination = (args: ChangeEvent<HTMLInputElement>) => {
        const destination = args.target.value;
        let destinationError = "" ;
        if (destination === ""){
            destinationError = " *Location name is required";
        }
        const vacation = { ...this.state.vacation };
        vacation.destination = destination;
        this.setState({ vacation });

        const errors = {...this.state.errors }
        errors.destinationError = destinationError;
        this.setState({ errors });
    }

    public setDescription = (args: ChangeEvent<HTMLInputElement>) => {
        const description = args.target.value;
        let descriptionError = "" ;
        if(description === ""){
            descriptionError = " *Description is required";
        }
        const vacation = { ...this.state.vacation };
        vacation.description = description;
        this.setState({ vacation });

        const errors = {...this.state.errors }
        errors.descriptionError = descriptionError;
        this.setState({ errors });
    }

    public setPrice = (args: ChangeEvent<HTMLInputElement>) => {
        const price = +args.target.value;
        let priceError = "";
        if(price <= 0){
            priceError = " *Price need to be higher than 0"
        }
        const vacation = { ...this.state.vacation };
        vacation.price = price;
        this.setState({ vacation });

        const errors = {...this.state.errors }
        errors.priceError = priceError;
        this.setState({ errors });
    }

    
    public setStartDate = (args: ChangeEvent<HTMLInputElement>) => {
        var startDate = args.target.value;
        let startDateError = "";
        if(!startDate || startDate === ""){
           startDateError = " *Required!";
        }
        if(Date.parse(startDate) < Date.now()) {
            startDateError = " *Date must be in the future!"
        }
        const vacation = { ...this.state.vacation };
        vacation.startDate = new Date(startDate);
        this.setState({ vacation });

        const errors = {...this.state.errors }
        errors.startDateError = startDateError;
        this.setState({ errors });
    }

    public setEndDate = (args: ChangeEvent<HTMLInputElement>) => {
        const endDate = args.target.value;
        let endDateError = "";
        if(!endDate || endDate === ""){
            endDateError = " *Required!"
        }
        if(Date.parse(endDate) <  Date.now()) {
            endDateError = " *Date must be in the future!"
        }
        const vacation = { ...this.state.vacation };
        vacation.endDate = new Date(endDate);
        this.setState({ vacation });

        const errors = {...this.state.errors }
        errors.endDateError = endDateError;
        this.setState({ errors });
    }

    public isValidated = () => {
        for(const prop in this.state.errors) {
            if(this.state.errors[prop].toString() !== "") {
                return false;
            }
        }
        return true;
    }


    public addVacation = async () => {
        if (this.isValidated()) {
            try {
                const response = await API.post<VacationModel>(Config.serverUrl + "/api/vacations", this.state.vacation, { withCredentials: true });
                const addedVacation = response.data;
                store.dispatch({ type: ActionType.addVacation, payload: addedVacation });
                console.log("Vacation added...");
            }
            catch (err) {
                alert("Error: " + err.message);
            }
        }
    }

    public deleteVacation = async (vacationId) => {
        try {
            await API.post(Config.serverUrl + "/api/delete-vacation", { vacationId }, { withCredentials: true });
            const vacationResponse = await API.get<VacationModel[]>( Config.serverUrl + "/api/vacations", { withCredentials: true });
            const vacations = vacationResponse.data;
            store.dispatch({ type: ActionType.getAllVacations, payload: vacations });
        } catch (err) {
            alert(err);
        }
    }

    // public editVacation = async (vacationId) => {
    //     alert('edit was clicked')
    // }

    public render() {
        return (
            <div className="admin-vacations">
                <div className="insert vacation-card">
                    <p className="insert-header">Add vacation here:</p>
                    <p> Location:</p>
                    <input type="text" onChange={this.setDestination} value={this.state.vacation.destination}></input>
                    <span className="error">{this.state.errors.destinationError}</span>

                    <p> Description:</p>
                    <input type="text" onChange={this.setDescription} value={this.state.vacation.description}></input>
                    <span className="error">{this.state.errors.descriptionError}</span>

                    <p>Start date:</p>
                    <input type="date" onChange={this.setStartDate} ></input>
                    <span className="error">{this.state.errors.startDateError}</span>

                    <p>End date:</p>
                    <input type="date" onChange={this.setEndDate} ></input>
                    <span className="error">{this.state.errors.endDateError}</span>

                    <p> Price:</p>
                    <input type="number" onChange={this.setPrice} value={this.state.vacation.price}></input>
                    <span className="error">{this.state.errors.priceError}</span>
                    <br /><br />

                    <Button disabled={!this.isValidated()} variant="dark" className="save" onClick={this.addVacation}>SAVE</Button>
                </div>

                <br /><br /><hr />

                <h3>Existing vacations</h3>
                {store.getState().vacations.map(v =>
                    <div className="vacation-card" key={v.vacationId}>
                        <p className="location">{v.destination}</p>
                        <p className="description">{v.description}</p>
                        <p>From: {new Date(v.startDate).toLocaleDateString()}</p>
                        <p>To: {new Date(v.endDate).toLocaleDateString()}</p>
                        <p>Price: {v.price}$ </p>
                        <div className="img-container">
                        <img src={"/assets/images/" + v.vacationImg} alt="vacation-Pic" />
                        </div>
                        <button className="delete" onClick={() => this.deleteVacation(v.vacationId)}>Delete vacation</button>
                        {/* <button className="edit" onClick={() => this.editVacation(v)}>Edit vacation</button> */}
                        <br />
                    </div>
                )}
            </div>
        );
    }

}
