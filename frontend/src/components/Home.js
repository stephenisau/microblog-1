import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TitleList from "../containers/TitleList";

class Home extends Component {
  render() {
    return (
      <main>
        <p>
          Welcome to <b>Microblog</b>, our innovative site for communicating
          on the information superhighway.
        </p>
        <TitleList />
      </main>
    );
  }
}

export default Home;