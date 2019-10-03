import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
// import NewPostFormContainer from './containers/NewPostFormContainer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <NewPostFormContainer/> */}
          <NavBar />
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
