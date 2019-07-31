import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/home";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import "./assets/styles/style.css";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Redirect from="/" to="/home" exact></Redirect>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);