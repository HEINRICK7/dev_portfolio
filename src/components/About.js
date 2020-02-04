import React from "react";
import saveImg from '../img/nova1.jpg';


const About = () =>{
  return(
  
  <>
    <div className="wrapper">
        <img src={saveImg} alt={'Carlos Henrique'}/>
        <h1>Carlos Henrique da Costa</h1>
        <h2><strong>Curso: </strong>Análise e Desenvolvimento de Sistemas</h2>
        <h4>Focado nas Melhores tecnólogias do Mercado como :<strong  style={{color: '#50fa7b'}}> React.Js, React Native e Node.Js</strong></h4>
        <p>Sonha e batalha para se tornar um programador <strong style={{color: '#50fa7b'}}>full-stack</strong></p>
    </div>
  </>
  
  );
  } 
  export default About;