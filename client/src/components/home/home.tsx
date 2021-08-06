import React, { Component } from "react";
import "./home.css";
import { Vacations } from "../vacations/vacations";
import { UserVacations } from "../userVacations/userVacations";
import { store } from "../../redux/store";
import { Admin } from "../adminPage/admin";
import { UserNotFollowingVacations } from "../notFollowingVacations/notFollowingVacations";
import { ActionType } from "../../redux/action-type";
import API from '../../api'
import { Config } from "../../config";
import { VacationModel } from "../../models/vacation-model";
import { Unsubscribe } from "redux";


interface userVacationsState {
    userVacations: VacationModel[];
    userId:number;
}

export class Home extends Component<any, userVacationsState> {
    private unsubscribeStore: Unsubscribe;
    public constructor(props: any) {
        super(props);
    }

    public async componentDidMount() {
        try {
            const responseUser = await API.get(Config.serverUrl + '/auth/get-user')
            store.dispatch({type: ActionType.getUser, payload: responseUser.data});
        } catch (err) {
            alert("Error: " + err.message);
        }
    }

    public render() {
        if (store.getState().userId) {
            if (store.getState().isAdmin)
                return (<Admin />)
            else {
                return (
                    <div className="home-page">
                         <UserVacations />
                        <br /><br />
                        <hr />
                        <UserNotFollowingVacations />
                    </div>
                );
            }
        } else {
            return (
                <Vacations />
            )
        }
    }
}                
