import { VacationModel } from "../models/vacation-model";

export class AppState {

    public userId;
    public isAdmin;
    public userVacations:VacationModel[];
    public vacations:VacationModel[];
    public unFollowedVacations:VacationModel[];
    public constructor(){
        this.vacations = new Array();
        this.unFollowedVacations = new Array();
        this.userVacations = new Array();
    }
} 