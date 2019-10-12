import React, { Component } from 'react';
import Toolbar from '../SideMenu/Toolbar/Toolbar';
import SideDrawer from '../SideMenu/SideDrawer/SideDrawer';
import Backdrop from '../SideMenu/Backdrop/Backdrop';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandle = () => {
    console.log('ok')
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">

          <Toolbar drawerClickHandle={this.drawerToggleClickHandle} />

          {this.state.sideDrawerOpen ?
            <div>
              <Backdrop />
              <SideDrawer drawerClickHandle={this.drawerToggleClickHandle} />
            </div>
            : null}

        </header>
        <main className="main">
          <p>
            Its content main
      </p>
        </main>

      </div>
    )
  }
}

export default App;
