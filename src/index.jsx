import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import "./assets/styles/Style.css";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Home/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);