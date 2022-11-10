import  React from "react";

import {Switch, Route, useLocation } from 'react-router-dom';

import SignIn from './components/SignIn';
import Register from './components/Registration';
import Home from './components/Home';
import Profile from "./components/Profile";
import App from "./components/App";

export default function Routes(){

    const location = useLocation();

    return(
        <Switch location = {location}>
            <Route path="/home" component={Home} />
            <Route path="/signin" component= {SignIn}/>
            <Route path="/register" component= {Register}/>
            <Route path="/profile" component= {Profile}/>
            <Route path="/app" component= {App}/>
        </Switch>
    );

}