import { VacationModel } from "../models/vacation-model";

export class AppState {

    public userId;
    public isAdmin;
    public userVacations:VacationModel[];
    public vacations:VacationModel[];
    public unFollowedVacations:VacationModel[];
    public constructor(){
        this.vacations = [];
        this.unFollowedVacations = [];
        this.userVacations = [];
    }
} 