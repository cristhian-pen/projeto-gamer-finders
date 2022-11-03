import  React from "react";

import {Switch, Route, useLocation } from 'react-router-dom';

import SignIn from './components/SignIn';

export default function Routes(){

    const location = useLocation();

    return(
        <Switch location = {location}>
            <Route path="/SignIn" component= {SignIn}/>
        </Switch>
    );

}