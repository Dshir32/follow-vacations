import React, { Component } from "react";
import "./layout.css";
import { BrowserRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { Home } from "../home/home";
import { LoginPage } from "../loginPage/loginPage"
import { RegisterPage } from "../registerPage/register";
import { store } from "../../redux/store";
import { Unsubscribe } from "redux";
import { Admin } from "../adminPage/admin";
import { Graph } from "../graphPage/graphPage";
import api from "../../api";
import { Config } from "../../config";

export class Layout extends Component {

    private unsubscribeStore: Unsubscribe;

    // state = {
    //     userId: Number,
    // };

    public constructor(prop: any) {
        super(prop);
        this.state = {
            userId: null
        }
        this.unsubscribeStore = store.subscribe(() => {
            const userId = store.getState().userId;
            if(userId) {
                this.setState({ userId });
            }
        });
    }

    public async componentDidlMount() {
        try{
            const userId = store.getState().userId;
            this.setState({ userId });
        } catch(err){
            alert(err.message);
        }   
    }
    
    public componentWillUnmount(): void {
        this.unsubscribeStore(); // Store-הפסק להאזין לשינויים של ה
    }

    public async logout() {
        await api.post(Config.serverUrl + '/auth/logout')
        window.location.href = "http://localhost:3001";
    }

    public render() {
        const home = < NavLink to="/home" exact key="123456"> Home</NavLink>
        var navBar = [home];
        const login = <NavLink to="/login" exact key="123465"><span> | </span> Login</NavLink>
        const logout = <NavLink to="/logout" exact key="123434365" onClick={this.logout}><span> | </span> Logout</NavLink>
        const register = <NavLink to="/register" exact key="123564"><span> | </span> Register </NavLink>
        const graphPage = <NavLink to="/reports" exact key="1235647"><span> | </span> Reports </NavLink>
        
        if (!store.getState().userId) {
            navBar.push(login);
            navBar.push(register);
        }
            if (store.getState().isAdmin) {
                navBar.push(graphPage)

        } if (store.getState().userId) {
            navBar.push(logout)
        }

        return (
            <div className="layout">
                <BrowserRouter>

                    <nav className="navbar fixed-top bg-secondary text-dark">
                        <div>
                            {navBar}
                        </div>
                    </nav>

                    <h1 className="Header">
                        Any where you wanna go...
                    </h1>

                    <hr /><br/>
                    <div className="main-container">
                    <Switch>
                        <Route path="/home" component={Home} exact key="1"></Route>
                        <Route path="/login" component={LoginPage} exact key="2"></Route>
                        <Route path="/register" component={RegisterPage} exact key="3"></Route>
                        <Route path="/admin" component={Admin} exact key="4"></Route>
                        <Route path="/reports" component={Graph} exact key="5"/>
                        <Redirect from="/" to="/home"></Redirect>
                    </Switch>
                    </div>
                </BrowserRouter>
                <br/>
                <hr/>
                <div className="footer">
                    <footer>&copy;ShirDahan 2020</footer>
                </div>
                <br/>
                <br/>
            </div>
        )
    }
}