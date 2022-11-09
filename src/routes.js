import  React from "react";

import {Switch, Route, useLocation } from 'react-router-dom';

import SignIn from './components/SignIn';
import Register from './components/Registration';
import Home from './components/Home';

export default function Routes(){

    const location = useLocation();

    return(
        <Switch location = {location}>
            <Route path="/home" component={Home} />
            <Route path="/signin" component= {SignIn}/>
            <Route path="/register" component= {Register}/>
        </Switch>
    );

}