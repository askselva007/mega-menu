import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NestedMenu from './NestedMenu';

class SubMenuItem extends Component {
    state = {
        isSubmenuVisible: false
    }

    toggleSubmenu = (e, value) => {
        this.setState({ isSubmenuVisible: (value !== null && typeof (value) !== undefined) ? value : !this.state.isSubmenuVisible })
    }

    render() {
        const { menuItem, i } = this.props;
        return (
            <React.Fragment>
                {menuItem.dividerAbove ? <li className="divider"></li> : ""}
                <li key={i} 
                    className={(menuItem.enabled || menuItem.enabled === undefined) ?
                        "dropdown-submenu" :
                        "dropdown-submenu disabled"}
                    onMouseEnter={menuItem.enabled || menuItem.enabled === undefined ? (e) => this.toggleSubmenu(e, true):null}
                    onMouseLeave={menuItem.enabled || menuItem.enabled === undefined ? (e) => this.toggleSubmenu(e, false):null}
                    onClick={menuItem.enabled || menuItem.enabled === undefined ? (e) => this.toggleSubmenu(e):null}
                >
                <div className={menuItem.icon ? menuItem.icon + " menu-item-icon" : "menu-item-icon"}  ></div>
                <Link
                    to={menuItem.to ?
                        menuItem.to :
                        "#"}
                >{menuItem.label}
                    {/* <span className="caret"></span> */}
                </Link>
                {
                    this.state.isSubmenuVisible && < NestedMenu
                        isSubmenuVisible={this.state.isSubmenuVisible}
                        dataSource={menuItem.subMenu}
                    ></NestedMenu>
                }
                </li>
                {menuItem.dividerBelow ? <li className="divider"></li> : ""}
            </React.Fragment>
        );
    }
}

export default SubMenuItem;