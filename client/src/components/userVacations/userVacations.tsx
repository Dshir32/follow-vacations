import React, { Component } from "react";
import "./userVacations.css";
import { VacationModel } from "../../models/vacation-model";
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
import { Unsubscribe } from "redux";
import API from '../../api'
import { Config } from "../../config";

interface userVacationsState {
    userVacations: VacationModel[];
}

export class UserVacations extends Component<any, userVacationsState> {
    private unsubscribeStore: Unsubscribe;

    public constructor(props:any){
        super(props);
        this.state = {
            userVacations:[],
        }

        this.unsubscribeStore = store.subscribe(() => {
            const userVacations = store.getState().userVacations;
            this.setState({ userVacations });
        }); 

    }

    public async componentDidMount() {
        try {
            //Go to server on this url and bring the vacations
            const id = store.getState().userId
            const response = await API.get<VacationModel[]>(Config.serverUrl + "/api/vacations/" + id);
            const userVacations = response.data;
            store.dispatch({ type: ActionType.getUserVacations, payload: userVacations });
            this.setState({ userVacations });
        }
        catch(err){
            alert(err.message);
        }
    }

    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    private async unFollowVacation(vacationId)  {
        try {
            const userId = store.getState().userId;
            const response = await API.post(Config.serverUrl + '/api/unfollow-vacation', {userId, vacationId})
            const {followedVacations, unFollowedVacations} = response.data
            store.dispatch({type: ActionType.getUserVacations, payload: followedVacations})
            store.dispatch({type: ActionType.unFollowedVacations, payload: unFollowedVacations})        
        } catch (err) {
            alert(err.message);
        }
    }

    public render(){
        return(
            <div className="userVacations">
                <h3>Vacations you are following:</h3>
                {store.getState().userVacations.map(v => 
                    <div className="vacation-card" key={v.vacationId}>
                        <div className="followCheck">
                            <label>Follow</label>
                            <input type="checkbox" defaultChecked onClick={() => this.unFollowVacation(v.vacationId)}></input>
                        </div>
                        <p className="location">{v.destination}</p>
                        <p className="description">{v.description}</p>
                        <p>From: {new Date(v.startDate).toLocaleDateString()}</p>
                        <p>To: {new Date(v.endDate).toLocaleDateString()}</p>
                        <p>Price: {v.price}$ </p>
                        {/* <noscript>{this.socket.emit('ready',function() { console.log('hi')} )}</noscript> */}
                        <div className="img-container">
                        <img src={"/assets/images/" + v.vacationImg} alt="vacation-Pic" />
                        </div>
                        <br/>
                    </div>
                )}
            </div>
        )
    }
}