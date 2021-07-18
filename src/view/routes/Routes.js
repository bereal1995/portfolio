import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";

const Routes = () => {

    return (
        <Switch>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
