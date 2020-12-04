import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/ui/Navbar/navbar";
import Home from "./Components/ui/Home/home";
import Decorations from "./Components/Decorations/decorations";

import './App.css';

class App extends Component { 

  // constructor() {
  //   super();
   
  // }

  render() {
  return (
    <div className="app">
      <header className="App-header">
        <Navbar/>
      </header>
     
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/decoraciones" component={Decorations}/>
          
        </Switch>
  
    </div>
  );
}
}

export default App;
