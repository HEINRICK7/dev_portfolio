import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/socialIcons/social-circles.css';
import './css/socialIcons/social-circles.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';

export default class App extends React.Component{
  render(){
    return(
      <>
      <Router>
        <Header />
        <About />
        <Footer />
      </Router>
      </>

    )
  }
}