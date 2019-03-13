import React, { Component } from 'react';
import './App.css';
// import Header from "./components/Header";
import Main from "./components/Main";
import Web from "./components/Web";
import Rectangle from "./components/Rectangle";
import About from "./components/About";
// import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="first-page">
        <Rectangle />
          <Web />
          <Main />
         <About />
      </div>
      
      <div className="second-page">

      </div>
 
      </div>
    );
  }
}

export default App;
