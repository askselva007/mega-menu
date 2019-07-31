import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NestedMenu from './../dropDownMenu/nestedMenu';

class NavigationBarBuilder extends Component {

    state = {
        dataSource: [
            {
                label: "Menu 1",
                enabled: false,
                icon: "glyphicon glyphicon-info-sign",
                to: "/home/Menu1"
            },
            {
                label: "Menu 2",
                icon: "glyphicon glyphicon-copy",
                to: "/home/Menu2"
            },
            {
                label: "Menu 3",
                icon: "glyphicon glyphicon-question-sign",
                to: "/home/Menu1"
            },
            {
                label: "Menu 4",
                icon: "glyphicon glyphicon-plus-sign",
                to: "/home/Menu1"
            },
            {
                label: "Menu 5",
                icon: "glyphicon glyphicon-globe",
                to: "/home/Menu1"
            },
            {
                label: "Menu 6",
                icon: "glyphicon glyphicon-erase",
                dividerBelow: true,
                dividerAbove: true,
                to: "/home/Menu1",
                subMenu: [
                    {
                        label: "Menu 6 -> Menu 1",
                        icon: "glyphicon glyphicon-info-sign",
                        to: "/home/Menu6Menu1"
                    },
                    {
                        label: "Menu 6 -> Menu 2",
                        to: "/home/Menu6Menu2"
                    },
                    {
                        label: "Menu 6 -> Menu 3",
                        to: "/home/Menu6Menu3"
                    },
                    {
                        label: "Menu 6 -> Menu 4",
                        icon: "glyphicon glyphicon-print",
                        to: "/home/Menu6Menu4"
                    },
                    {
                        label: "Menu 6 -> Menu 5",
                        to: "/home/Menu6Menu5"
                    },
                    {
                        label: "Menu 6 -> Menu 6",
                        to: "/home/Menu6Menu6"
                    },
                ]
            },
            {
                label: "Menu 7",
                icon: "glyphicon glyphicon-user",
                to: "/home/Menu7"
            },
            {
                label: "Menu 8",
                icon: "glyphicon glyphicon-random",
                to: "/home/Menu8"
            },
            {
                label: "Menu 9", 
                icon: "glyphicon glyphicon-book",
                to: "/home/Menu9"
            },
            {
                label: "Menu 10",
                icon: "glyphicon glyphicon-time",
                to: "/home/Menu10"
            },
            {
                label: "Menu 11",
                icon: "glyphicon glyphicon-file",
                to: "/home/Menu11"
            },
            {
                label: "Menu 12",
                icon: "glyphicon glyphicon-globe",
                to: "/home/Menu12"
            },
            {
                label: "Menu 13",
                icon: "glyphicon glyphicon-warning-sign",
                to: "/home/Menu13"
            },
            {
                label: "Menu 14",
                icon: "glyphicon glyphicon-tasks",
                to: "/home/Menu14",
                subMenu: [
                    {
                        label: "Menu 14 -> Menu 1",
                        to: "/home/Menu14Menu1"
                    },
                    {
                        label: "Menu 14 -> Menu 2",
                        icon: "glyphicon glyphicon-screenshot",
                        to: "/home/Menu14Menu2"
                    },
                    {
                        label: "Menu 14 -> Menu 3",
                        to: "/home/Menu14Menu3"
                    },
                    {
                        label: "Menu 14 -> Menu 4",
                        to: "/home/Menu14Menu4"
                    }
                ]
            },
        ],
        showMenu: false
    };

    onClick(value) {
        this.setState({ showMenu: (value !== null && typeof (value) !== undefined) ? value : !this.state.showMenu })
    }

    render() {
        const { NavbarMenuItems } = this.props;

        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li onClick={() => this.onClick()} className={this.state.showMenu ? "active" : null}
                            onMouseEnter={() => this.onClick(true)}
                            onMouseLeave={() => this.onClick(false)}>
                            <Link
                                to="/SomeLink"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                            >Add Rule <span className="caret"></span></Link>
                            {
                                this.state.showMenu &&
                                <NestedMenu id="menuSearch"
                                    isSubmenuVisible={this.state.showMenu}
                                    dataSource={this.state.dataSource}
                                />}
                        </li>

                        {NavbarMenuItems.map((menu, idx) => {
                            return (
                                <li
                                    key={idx}
                                    className={menu.IsEnabled ? menu.Class : menu.Class + " disabled"}
                                >
                                    <div className={menu.IsEnabled ? menu.Icon : menu.Icon + " disabled"} />
                                    <Link to={menu.path === "" || menu.path === null ? "/" : menu.path} >
                                        {menu.Name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


export default NavigationBarBuilder;