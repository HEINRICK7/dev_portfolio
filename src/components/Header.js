import React from "react";
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
  return(
    <header>
      <div className="links">
        <Link to="/about">Sobre</Link>
        <Link to="/">Trabalho</Link>      
      </div>
    </header>
  
  );
  }
}
