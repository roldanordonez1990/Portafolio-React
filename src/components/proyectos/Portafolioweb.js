import React from 'react';
import { Link } from "react-router-dom";

export const Portafolioweb = () => {
  return (
    <>
    <div id="container-proyectos" className="container-proyectos">
      <h2 className="container-proyectos-titulo">Portafolio Web <span className='name'>"Francisco Roldán"</span></h2>
      <p className='p-container-proyectos'>Portafolio web donde mostrar información personal, habilidades y recorrido profesional. </p>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        2023.
      </p>
      <p>
      Como desarrollador web, considero que tener un portafolio es crucial para mostrar mis habilidades y experiencia en la industria tecnológica. 
      Este en concreto, contiene ejemplos de los proyectos en los que he trabajado y una descripción detallada de mi participación en ellos. 
      Además, incluyo información sobre las herramientas y tecnologías que domino, formación académica y experiencia laboral. 
      Mantener mi portafolio actualizado y bien diseñado me permite destacar en mis habilidades y competencias en el desarrollo web, 
      lo que puede atraer la atención de terceros. En resumen, es una herramienta importante para mi carrera y me permite mostrar todo lo descrito de manera efectiva. 
      </p>
      <p>
      El uso de <span className="titulacion">React</span> como tecnología es por ser altamente escalable permitiendo el desarrollo de interfaces interactivas y dinámicas de manera eficiente, 
      por lo que facilita la creación aplicaciones web con una mejor experiencia de usuario.
      </p>
      <p>
      Todas las funciones de este proyecto fueron realizadas de manera individual.
      </p>
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>JSX</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/Portafolio-React" target="_blank">Github</Link></h3>
      <div className="arrow">
        <a href="#container-proyectos"><i className='fas fa-arrow-circle-up'></i></a>
      </div>
    </div>
    </>
  )
}
