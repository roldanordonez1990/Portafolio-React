import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Granizo = () => {
  return (
    <>
    <div id="container-proyectos" className="container-proyectos">
      <h2 className="container-proyectos-titulo">Web Meteorológica <span className="name">"El Granizo"</span></h2>
      <p className='p-container-proyectos'>Aplicación para consultar datos meteorológicos en tiempo real de cualquier parte del mundo. </p>
      <Carousel>
        <div >
          <img src="/images/mapa3.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div>
          <img src="/images/paisajes.png" alt="2" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa2.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa4.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa6.png" alt="1" />
          <p className="legend1"></p>
        </div>
      </Carousel>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        2021.
      </p>
      <p>
        Este proyecto surge de mi afición por la meteorología, siendo esta uno de mis mayores hobbies. Siempre quise crear una web en la cual pudiese unir varias de mis aficiones,
        dándose la oportunidad en una de las asignaturas del <span className="titulacion">CFGS</span>, donde pude escoger la temática personalmente y desarrollar una web completamente dinámica en equipo, junto con dos compañeros más. 
      </p>
      <p>
        El proyecto se cimentó de principio a fin de forma organizada, 
        usando herramientas conjuntas para trabajar en equipo emulando metodologías de trabajo reales (<span className="titulacion">Scrum</span>) donde las tareas eran repartidas.
      </p>
      <p>
        Dentro de las funciones para la creación de la web, me encargué de organizar el reparto de tareas, diseño de layout y desarrollo y maquetación de páginas como el inicio, mapas interactivos, tablas de datos y noticiero.
      </p>
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>SCSS</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>API: <Link className="icon2" to="https://openweathermap.org/api" target="_blank">Openweathermap</Link></li>
        <li>API: <Link className="icon2" to="https://developer.tomtom.com/" target="_blank">TomTom</Link></li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/ArCuPa" target="_blank">Github</Link></h3>
      <div className="arrow">
        <a href="#container-proyectos"><i className='fas fa-arrow-circle-up'></i></a>
      </div>
    </div>
    </>
  );
};
