import React, { Component } from "react";
import "./loginPage.css";
import { store } from "../../redux/store";
import { ActionType } from "../../redux/action-type";
import { Unsubscribe } from "redux";
import API from '../../api';
import { Config } from "../../config";
import Button from 'react-bootstrap/Button';


interface LoginState {
    userName: string;
    password: string;
    userId:number;
    errors: {
        loginError: String
    }
}

export class LoginPage extends Component<any, LoginState>{

    private unsubscribeStore: Unsubscribe; // stop listening to store

    public constructor(prop: any) {
        super(prop);
        this.state = {
            userName: " ",
            password: " ",
            userId: null,
            errors: {
                loginError: "",
            }
        };

        this.unsubscribeStore = store.subscribe(() => {
            const userId = store.getState().userId;
            this.setState({ userId });
        });
    }

    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    public updateUserName = (args) => this.setState({ userName: args.target.value });
    public updatePassword = (args) => this.setState({ password: args.target.value });

    public tryLogin = async () => {
        let loginError = "";
        const errors = {...this.state.errors};
        try {
            const { userName, password } = this.state;
            if (userName && password !== "") {
                const response = await API.post(Config.serverUrl + "/auth/login", { userName, password });
                console.log(response);

                if (response.status === 200) {
                    store.dispatch({ type: ActionType.login, payload: response.data });

                    this.props.history.push("/home");
                }
            } else {
                loginError ="* Please enter user name AND password";
                errors.loginError = loginError;
                this.setState({ errors });
            }
        }
        catch (err) {
            loginError = "* User name and password do not match";
            errors.loginError = loginError;
            this.setState({ errors });
        }
    }

    public render() {
        return (
            <div className="main">
                <div className="login-section">
                    <h1>Login page</h1>
                    <br />
                    <form>
                        <input type="text" onChange={this.updateUserName} value={this.state.userName} placeholder="User name..." />

                        <br /><br />

                        <input type="password" value={this.state.password} placeholder="Password" onChange={this.updatePassword}></input>

                        <br /><br />
                        <span className="error">{this.state.errors.loginError === "" ? null: this.state.errors.loginError}</span>
                        <br />
                        <Button variant="dark" className="save" type="button" onClick={this.tryLogin} >Login</Button>
                    </form>

                    <br /><br />
                    <hr />

                </div>
                <br /><br />
            </div>
        )
    }
}
