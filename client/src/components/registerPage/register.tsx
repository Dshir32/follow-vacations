import React, { Component, ChangeEvent } from "react";
import "./register.css";
import { UserModel } from "../../models/user-model";
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
import API from '../../api'
import { Config } from "../../config";
import Button from 'react-bootstrap/Button';


interface RegisterState{
    user: UserModel;
    errors: {
        firstNameError: String,
        lastNameError: String,
        userNameError: String,
        passwordError: String,
    }
}

export class RegisterPage extends Component<any, RegisterState>{

    public constructor(prop:any){
        super(prop);
        this.state = {
            user: new UserModel(),
            errors: {
                firstNameError: " *",
                lastNameError: " *",
                userNameError: " *",
                passwordError: " *",
            }
        }
    }

    public setFirstName = (args:ChangeEvent<HTMLInputElement>) => {
        const firstName = args.target.value;
        let firstNameError = "";
        if(firstName === "" || !firstName){
            firstNameError = " *Required"
        }
        const user = {...this.state.user};
        user.firstName = firstName;
        this.setState({ user });

        const errors = {...this.state.errors};
        errors.firstNameError = firstNameError;
        this.setState({ errors });

    }

    public setLastName = (args:ChangeEvent<HTMLInputElement>) => {
        const lastName = args.target.value;
        let lastNameError = "";
        if(lastName === "" || !lastName){
            lastNameError = " *Required"
        }
        const user = {...this.state.user};
        user.lastName = lastName;
        this.setState({ user });

        const errors = {...this.state.errors};
        errors.lastNameError = lastNameError;
        this.setState({ errors });
    }

    public setUserName = (args:ChangeEvent<HTMLInputElement>) => {
        const userName = args.target.value;
        let userNameError = "";
        if(userName === "" || !userName){
            userNameError = " *Required"
        }
        const user = {...this.state.user};
        user.userName = userName;
        this.setState({ user });

        const errors = {...this.state.errors};
        errors.userNameError = userNameError;
        this.setState({ errors });
    }

    public setPassword = (args:ChangeEvent<HTMLInputElement>) => {
        const password = args.target.value;
        let passwordError = "";
        if(password === "" || !password || password.length < 5){
            passwordError = " *Required, min 5 chars long"
        }
        const user = {...this.state.user};
        user.password = password;
        this.setState({ user });

        const errors = {...this.state.errors};
        errors.passwordError = passwordError;
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

    public register = async() => {
        const errors = {...this.state.errors};
        try {
            const response = await API.post<UserModel>(Config.serverUrl + "/auth/register" , this.state.user, { withCredentials: true });
            if(response.status === 210) {
            errors.userNameError = " *Already taken!";
            this.setState({ errors });
            } 
            else {
            const registeredUser = response.data;
            store.dispatch({type: ActionType.register, payload:registeredUser});
            alert("You have been registered...");
            this.props.history.push("/home")
            }
        }
        catch(err) {
          alert("Error: " + err.message);
        }
    }

    public render(){
        return(
            <div className="register-page">
                <h1>Registration page</h1>
                <form>

                    <p>First name: </p>
                    <input type="text" onChange={this.setFirstName} value={this.state.user.firstName}></input>
                    <span className="error">{this.state.errors.firstNameError}</span>
                    <br/><br/>

                    <p>Last name: </p>
                    <input type="text" onChange={this.setLastName} value={this.state.user.lastName}></input>
                    <span className="error">{this.state.errors.lastNameError}</span>
                    <br/><br/>

                    <p>User name: </p>
                    <input type="text" onChange={this.setUserName} value={this.state.user.userName}></input>
                    <span className="error">{this.state.errors.userNameError}</span>
                    <br/><br/>

                    <p>Password: </p>
                    <input type="password" onChange={this.setPassword} value={this.state.user.password}></input>
                    <span className="error">{this.state.errors.passwordError}</span>
                    <br/><br/><br/>

                    <Button disabled={!this.isValidated()} variant="dark" className="save" type="button" onClick={this.register}>Register</Button>
                </form>
            </div>
        )
    }
}
