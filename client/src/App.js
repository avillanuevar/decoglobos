import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/ui/Navbar/navbar";
import Footer from "./Components/ui/Footer/footer"
import Home from "./Components/ui/Home/home";
import Decorations from "./Components/ui/Decorations/decorations";

import './App.css';

class App extends Component { 

  constructor() {
    super();
    this.state = {
      location: window.location.pathname
    }
  }

  _locationChange(newLocation) {
    console.log(newLocation);
    this.setState({location: newLocation})
    
  }

  render() {
  return (
    <div className="app">
      <header className="App-header">
        <Navbar location={this.state.location} changeLoation={this._locationChange.bind(this)}/>
      </header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/decoraciones" component={Decorations}/>
      </Switch>
      <footer>
        <Footer location={this.state.location} changeLoation={this._locationChange.bind(this)}/>
      </footer>
    </div>
  );
}
}

export default App;
