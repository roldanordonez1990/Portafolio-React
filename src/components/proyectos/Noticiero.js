import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Noticiero = () => {

  const handleClickArrow = (e) => {
    const section = document.querySelector('#container-proyectos');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <div id="container-proyectos" className="container-proyectos">
      <h2 className="container-proyectos-titulo">Web de Noticias <span className='name'>"Noticiero Online"</span></h2>
      <p className='p-container-proyectos'>Página web para la publicación y lectura de noticias nacionales e internacionales. </p>
      <Carousel>
        <div >
          <img src="/images/noticiero.png" alt="1" />
          <p className="legend1"></p>
        </div>
      </Carousel>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        2021.
      </p>
      <p>
        Proyecto final para la asignatura de <span className="titulacion">PHP</span> del <span className="titulacion">CFGS de Desarrollo de Aplicaciones Web</span>.
        Aquí la idea era desarrollar una aplicación web completa con una temática de libre elección haciendo uso del <span className="titulacion">framework Laravel</span> y de una base de datos relacional con <span className="titulacion">phpMyadmin</span> como gestor de esta.
      </p>
      <p>
        Las funciones de la aplicación consisten tanto en filtrar noticias por categorías; deportivas, sociales, económicas y políticas de ámbito nacional e internacional,
        como en publicar tus propias noticias después de haber sido registrado como miembro.
      </p>
      <p>
      Todas las funciones de este proyecto fueron realizadas de manera individual.
      </p>
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>CSS3</li>
        <li>Laravel</li>
        <li>PHP</li>
        <li>SQL</li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/Noticiero-Laravel" target="_blank">Github</Link></h3>
      <div className="arrow">
        <Link to="#container-proyectos" onClick={(e) =>handleClickArrow(e)}><i className='fas fa-arrow-circle-up'></i></Link>
      </div>
    </div>
    </>
  )
}
