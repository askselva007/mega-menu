import React from 'react';
import { Link } from 'react-router-dom';

const SubMenuItem = (props) => {
    const { menuItem, i } = props;
    return (
        <React.Fragment>
            {menuItem.dividerAbove ? <li className="divider"></li> : ""}
            <li key={i}
                className={(menuItem.enabled || menuItem.enabled === undefined) ?
                    "" :
                    "disabled"}>
                <div className={menuItem.icon ? menuItem.icon + " menu-item-icon" :"menu-item-icon"}  ></div>
                <Link
                    to={menuItem.to ? menuItem.to : "#"}
                >{menuItem.label}</Link>
            </li>
            {menuItem.dividerBelow ? <li className="divider"></li> : ""}
        </React.Fragment>);
}

export default SubMenuItem;