import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Details from './Components/Details'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
      
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/details" component={Details} />
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />

      </Switch>
      
      
    </React.Fragment>
    );
  }
}

export default App;
