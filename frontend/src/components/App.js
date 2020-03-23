import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navigation from './Navigation/';

// import Home from "./Home";
import Routes from './Routes';


/** Overall blog application:
 *
 * - shows header, nav links, and contains routes to:
 *   - new form
 *   - homepage
 *   - individual posts
 */

class App extends Component {
  render() {
    return (
      <div className="App container">

      <BrowserRouter>
        <Navigation />
          <Routes />
        </BrowserRouter>

      </div>
    );
  }
}


export default App;