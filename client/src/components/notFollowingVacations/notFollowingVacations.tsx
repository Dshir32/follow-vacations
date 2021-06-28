import React, { Component } from "react";
import "./notFollowingVacations.css";
import { VacationModel } from "../../models/vacation-model";
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
import { Unsubscribe } from "redux";
import API from '../../api'
import { Config } from "../../config";

interface userVacationsState {
    userNotFollowVacations: VacationModel[];
}

export class UserNotFollowingVacations extends Component<any,userVacationsState>{
    
    private unsubscribeStore: Unsubscribe;

    public constructor(props:any){
        super(props);
        this.state = {
            userNotFollowVacations:[],
        }
        this.unsubscribeStore = store.subscribe(() => {
            const userNotFollowVacations = store.getState().unFollowedVacations;
            this.setState({ userNotFollowVacations });
        }); 
    }

    public async componentDidMount() {
        if(store.getState().userVacations.length > 0){ //Don't get vacations from server if u have them already
            return;
        }
        try {
            //Go to server on this url and bring the vacations
            const id = store.getState().userId
            const response = await API.get<VacationModel[]>(Config.serverUrl + "/api/not-following-vacations/" + id);
            const userNotFollowVacations = response.data;
            store.dispatch({type: ActionType.unFollowedVacations, payload: userNotFollowVacations})
            this.setState({ userNotFollowVacations });
        }
        catch(err){
            alert(err.message);
        }
    }

    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    private async followVacation(vacationId) {
        try {
            const userId = store.getState().userId;
            const response = await API.post(Config.serverUrl + '/api/follow-vacation', {userId, vacationId})
            const {followedVacations, unFollowedVacations} = response.data
            store.dispatch({type: ActionType.getUserVacations, payload: followedVacations})
            store.dispatch({type: ActionType.unFollowedVacations, payload: unFollowedVacations})
        } catch (err) {
            console.log(err)
        }
    }

    public render(){
        return(
            <div className="userVacations">
                <h3>Vacations you might be intrested in:</h3>
                {this.state.userNotFollowVacations.map(v => 
                    <div className="vacation-card" key={v.vacationId}>
                        <div className="followCheck">
                            <label>FOLLOW  </label>
                            <input type="checkbox" onClick={() => this.followVacation(v.vacationId)}></input>
                        </div>
                        <p className="location">{v.destination}</p>
                        <p className="description">{v.description}</p>
                        <p>From: {new Date(v.startDate).toLocaleDateString()}</p>
                        <p>To: {new Date(v.endDate).toLocaleDateString()}</p>
                        <p>Price: {v.price}$ </p>
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


