import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Videojuego = () => {
  return (
    <>
    <div id="container-proyectos" className="container-proyectos">
      <h2 className="container-proyectos-titulo">Videojuego en <span className="titulacion">JS</span></h2>
      <p className='p-container-proyectos'>Videojuego sencillo de fácil jugabilidad para practicar la lógica con <span className="titulacion">JS</span>. </p>
      <Carousel>
        <div >
          <img src="/images/juego.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div>
          <img src="/images/paisajes.png" alt="2" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa3.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa3.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/mapa3.png" alt="1" />
          <p className="legend1"></p>
        </div>
      </Carousel>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        Este pequeño videojuego se creó con el objetivo de practicar la lógica con <span className="titulacion">JavaScript</span> nativo, donde se combina el uso de <span className="titulacion">arrays</span>, eventos del teclado, funciones, animaciones y un resultado gráfico final.
      </p>
      <p>
      Todas las funciones de este proyecto fueron realizadas de manera individual.
      </p>
      
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>CSS3</li>
        <li>JavaScript</li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/ArCuPa/tree/master/juegos/Francisco" target="_blank">Github</Link></h3>
      <div className="arrow">
        <a href="#container-proyectos"><i className='fas fa-arrow-circle-up'></i></a>
      </div>
    </div>
    </>
  )
}
