
import React, { Component } from 'react';
import './App.css';
import NavRoutes from './NavRoutes';

// Main class of the App. 
// Returns React Fragment which includes Router element for routing between elements
export default class App extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="content">
            <NavRoutes />
          </div>
        </div>
      </React.Fragment >
    )

  }

}
