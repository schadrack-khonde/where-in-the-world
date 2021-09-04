import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import ViewCountryCard from "./ViewCountryCard";


const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route
                    exact
                    path={`/details`}
                    component={ViewCountryCard}/>
            </Switch>
        </Router>
    )
}

export default Main;
