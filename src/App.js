import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './css/socialIcons/social-circles.css';
import './css/socialIcons/social-circles.min.css';

import Home from './components/Home.component/Home';
import Header from './components/Home.component/Header';
import Footer from './components/Home.component/Footer';

import About from './components/About';
import Job from './components/Job';

export default class App extends React.Component{
  render(){
    return(
      <>
      <Router>

        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/job' component={Job} />
        <Footer />
       
      </Router>
      </>

    )
  }
}