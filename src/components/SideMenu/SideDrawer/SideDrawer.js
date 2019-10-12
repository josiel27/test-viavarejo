import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';

    if (props.show) { drawerClasses = 'side-drawer open' };

    return (
        <nav className={drawerClasses}>
            <div className="close-side-menu" onClick={props.drawerClickHandle}>x</div>
            <ul>
                <li>Resumo</li>
                <li>Dashboard</li>
                <li>Configurações</li>
            </ul>
        </nav>
    );
}

export default SideDrawer;