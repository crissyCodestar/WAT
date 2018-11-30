import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Navbar from './Components/Navbar/Navbar';

class App extends Component {



  render() {
    return (
      <div>
          <div className="headerContainer">
                  <Navbar/>
          </div>
          <div className="mainContainer" id="main">
              <Switch>
                  <Route exact path="/WAT/" component={Main} />
                  <Route path="/WAT/about" component={About} />
              </Switch>
          </div>
          <div>
              <footer id="footer"><p id="thanks"><strong></strong></p></footer>
          </div>
      </div>
    );
  }
}

export default App;
