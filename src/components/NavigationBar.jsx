import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NestedMenu from './../dropDownMenu/NestedMenu';
import NavigationBarData from "./../assets/data/NavigationBar.json";

class NavigationBar extends Component {

    state = {
        Menu: false,
        dataSource: NavigationBarData.dataSource
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


export default NavigationBar;