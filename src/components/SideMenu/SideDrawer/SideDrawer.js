import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    return (
        <nav className="side-drawer">
            <div className="close-side-menu" onClick={props.drawerClickHandle}>x</div>
            <ul>
                <li className="">x</li>
                <li className="">asdsad</li>
            </ul>
        </nav>
    );
}

export default SideDrawer;