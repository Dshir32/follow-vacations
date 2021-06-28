import React, { Component } from "react";
import "./vacations.css";
import { VacationModel } from "../../models/vacation-model";
import { store } from "../../redux/store";
import { Unsubscribe } from "redux";
import API from '../../api';
import { Config } from "../../config";
// import io from "socket.io-client";
// import { ActionType } from "../../redux/action-type";

class Popup extends Component {
    props: any;
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.closePopup}>Close me</button>
          </div>
        </div>
      );
    }
  }

interface VacationsState{
    vacations: VacationModel[];
    userVacations: VacationModel[];
    showPopup : boolean;
}

export class Vacations extends Component<any, VacationsState> {
    // public socket = io("http://localhost:3000");

    private unsubscribeStore: Unsubscribe;

    public constructor(props:any){
        super(props);
        this.state = {
            vacations:[],
            userVacations:[],
            showPopup: false,
        }    
         

        this.unsubscribeStore = store.subscribe(() => {
            const userVacations = store.getState().userVacations;
            this.setState({ userVacations });
        });

        // this.socket.on('connect', () => {
        //     this.socket.emit(`ready`, `I'm real bot!!!`);

        //     this.socket.on('server-msg', data => alert(data));
        //     this.socket.on('vacation-update', vacations => {
        //         alert('I received a vacation update');
        //        store.dispatch({type: ActionType.deleteVacation, payload: vacations});
        //     });
        // });
    }  

    public async componentDidMount() {
        try {
            //Go to server on this url and bring the vacations
            const response1 = await API.get<VacationModel[]>(Config.serverUrl + "/api/vacations", {withCredentials: true});
            const vacations = response1.data;
            this.setState({ vacations }); 
        }
        catch(err){
            alert(err.message);
        }
    }

    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    public togglePopup() {
        const allInputs = document.querySelectorAll('input');
        if( !store.getState().userId){
            this.setState({ showPopup: !this.state.showPopup });
            allInputs.forEach(input => input.checked = false);
        } 
      }

    public render(){
        return(
            <React.Fragment>
            {this.state.showPopup ? <Popup 
                text='You have to be logged in to follow vacations'
                closePopup = {this.togglePopup.bind(this)}/> : null}
            
            <div className="vacations">
                {this.state.vacations.map(v => 
                    <div className="vacation-card" key={v.vacationId}>
                        <div className="followCheck">
                            <label>FOLLOW  </label>
                            <input id={v.destination} type="checkbox" onClick={this.togglePopup.bind(this)}></input>
                        </div>
                        <p className="location">{v.destination}</p>
                        <p className="description">{v.description}</p>
                        <p>From: {new Date(v.startDate).toLocaleDateString()}</p>
                        <p>To: {new Date(v.endDate).toLocaleDateString()}</p>
                        <p>Price: {v.price}$ </p>

                        <div className="img-container">
                            <p>Following: {v.totalFollowers}</p>
                            <img src={"/assets/images/" + v.vacationImg } alt="vacation-Pic" />
                        </div>
                    </div>
                )}
            </div>
            </React.Fragment>
        )
    }
}
