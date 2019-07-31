import React, { Component } from 'react';
import SubMenuItemWithChild from './subMenuItemWithChild';
import SubMenuItem from './subMenuItem';

class NestedMenu extends Component {
    state = {
        isSubmenuVisible: this.props.isSubmenuVisible ? this.props.isSubmenuVisible : false
    }

    toggleSubmenu = (e, value) => {
        this.setState({ isSubmenuVisible: (value !== null && typeof (value) !== undefined) ? value : !this.state.isSubmenuVisible })
        //this.props.ResetMenu();
        if (!this.props.onHoverExpand) { e.stopPropagation() }
    }

    menuItems = () => {
        const { dataSource } = this.props;
        return dataSource.map((menuItem, i) =>
            menuItem.subMenu ?
                <SubMenuItemWithChild key={i}
                    toggleSubmenu={(e, value) => this.toggleSubmenu(e,value)}
                    menuItem={menuItem}
                    i={i}
                    isSubmenuVisible={this.state.isSubmenuVisible}
                /> :
                <SubMenuItem menuItem={menuItem} i={i} key={i}/>
        )
    }

    render() {
        return (
            this.state.isSubmenuVisible &&
            <ul className={"dropdown-menu"} style={{ display: "block" }}>
                {
                    this.menuItems()
                }
            </ul>
        );
    };
}

export default NestedMenu;