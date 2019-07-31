import React, { Component } from "react";
import NavigationBarBuilder from "./NavigationBar"; 

class Home extends Component {
    state = {
        NavbarItems: [
            {
                Name: "Save",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-floppy-disk",
                path: "/save",
                IsEnabled: true
            },
            {
                Name: "Save and run",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-floppy-saved",
                path: "",
                IsEnabled: true
            },
            {
                Name: "Save and close",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-floppy-remove",
                path: "",
                IsEnabled: true
            },
            {
                Name: "Close",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-remove",
                path: "",
                IsEnabled: true
            },
            {
                Name: "Properties",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-align-justify",
                path: "",
                IsEnabled: true
            },
            {
                Name: "Clear",
                Class: "",
                OnClick: "",
                Icon: "glyphicon glyphicon-erase",
                path: "",
                IsEnabled: true
            }
        ]
    }

    render() { 
        return (
            <div id="SrchBldrCntr" className="container">
            <div className="page-header">
                <h3>Home Page</h3>
            </div>
            <NavigationBarBuilder
                NavbarMenuItems={this.state.NavbarItems}
            />
        </div>);
    }
}
 
export default Home;