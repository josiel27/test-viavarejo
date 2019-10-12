import React from 'react';
import './Toolbar.css'
import logo from '../../../assets/images/logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const Toolbar = props => {
    return (
        <div className="nav-main">
            <nav className="nav">
                <div className="nav-logo"><img src={logo} alt="logo" /></div>
                <div className="nav-title"><a href="#">Controle Financeiro</a></div>
                <div className="nav-spacer"></div>
                <div className="nav-items">
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Resumo</a></li>
                        <li><a href="#">Configurações</a></li>
                    </ul>
                </div>
                <div>
                    <DrawerToggleButton clickParam={props.drawerClickHandle} />
                </div>
            </nav>
        </div>
    );
}

export default Toolbar;