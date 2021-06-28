import React, { Component } from "react";
import "./graphPage.css";
import { VacationModel } from "../../models/vacation-model";
import { Unsubscribe } from "redux";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
import API from '../../api'
import { Config } from "../../config";


interface graphState {
    userVacations: VacationModel[];
    vacations: VacationModel[];
}

export class Graph extends Component<any, graphState>{

    private unsubscribeStore: Unsubscribe;

    public constructor(props: any) {
        super(props);
        this.state = {
            userVacations: [],
            vacations: []
        }
    }

    public async componentDidMount() {
        if(store.getState().userVacations.length > 0){ //Don't get vacations from server if u have them already
            return;
        }
        try {
            //Go to server on this url and bring the vacations
            const response1 = await API.get<VacationModel[]>(Config.serverUrl + "/api/vacations");
            const vacations = response1.data;
            store.dispatch({type: ActionType.getAllVacations, payload: vacations})
        }
        catch (err) {
            alert(err.message);
        }
    }

    public render() {

        const vacations = store.getState().vacations.filter(v => v.totalFollowers > 0).map(v => { return {vacationName: v.destination, followers: v.totalFollowers}});

        return (
            <div className="reports">
                <VictoryChart
                width={1000}
                    theme={VictoryTheme.material}
                    domainPadding={50}>
                    <VictoryAxis />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => parseInt(x, 10)}
                    />
                    <VictoryBar
                        data={vacations}
                        // data accessor for x values
                        x="vacationName"
                        // data accessor for y values
                        y="followers"
                    />
                </VictoryChart>
            </div>
        )
    }
}