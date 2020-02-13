import React from "react";
import { Link } from 'react-router-dom';

const Header = () =>(
  <header>
    <div className="links">
      <Link to="/about">Sobre</Link>
      <Link to="/job">Projetos</Link>      
    </div>
  </header>
  
);
export default Header;