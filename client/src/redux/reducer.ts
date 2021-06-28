import { AppState } from "./app-state";
import { Action } from "./action";
import { ActionType } from "./action-type";

export function reduce(oldAppState: AppState, action: Action): AppState {

    const newAppState = { ...oldAppState };

    switch (action.type) {
        case ActionType.getUser:
            newAppState.userId = action.payload.userId;
            newAppState.isAdmin = action.payload.isAdmin;
            break;

        case ActionType.unFollowedVacations:
            newAppState.unFollowedVacations = action.payload;
            break;

        case ActionType.login:
            newAppState.userId = action.payload.userId;
            newAppState.isAdmin = action.payload.isAdmin;
            break;

        case ActionType.getUserVacations:
            newAppState.userVacations = action.payload;
            break;

        case ActionType.getAllVacations:
            newAppState.vacations = action.payload;
            break;

        case ActionType.addVacation:
            newAppState.vacations.push(action.payload);
            break;

        default: break;
    }

    return newAppState;
}