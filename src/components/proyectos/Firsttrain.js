import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Firsttrain = () => {
  return (
    <>
    <div id="container-proyectos" className="container-proyectos">
      <h2 className="container-proyectos-titulo">Aplicación deportiva <span className='name'>"Firsttrain"</span></h2>
      <p className='p-container-proyectos'>Aplicación para la gestión de reservas en las actividades que ofrece el centro deportivo.</p>
      <Carousel>
        <div >
          <img src="/images/firsttrain.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div>
          <img src="/images/ft2.png" alt="2" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/ft3.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/ft4.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/ft5.png" alt="1" />
          <p className="legend1"></p>
        </div>
      </Carousel>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        2021.
      </p>
      <p>
        Este proyecto fue mi trabajo final del <span className='titulacion'>CFGS en Desarrollo de Aplicaciones Web</span>. 
        La idea era desarrollar una aplicación que no sólo sirviese para obtener la titulación, sino que fuese más allá convirtiéndose en un proyecto real y poder llegar a ser utilizada.
        Aquí se puso en práctica todo lo aprendido en proyectos anteriores de manera más profesional, viéndose reflejado en la interfaz, experiencia de usuario, funcionalidad, rendimiento y resultado final.
      </p>
      <p>
        Dado que las tecnologías a usar eran de libre elección, no dudé en emplear los dos <span className="titulacion">framework</span> que hasta el momento me habían dado mejores resultados, 
        <span className='titulacion'> Angular</span> para la parte <span className="titulacion">frontend</span>, y <span className='titulacion'> Spring Boot</span> para el <span className="titulacion">backend</span>. 
        Por otro lado, la base de datos se realizó con <span className='titulacion'> MySQL</span>, usando <span className='titulacion'> triggers</span> para el cupo de reservas en una hora determinada.
      </p>
      <p>
      Todas las funciones de este proyecto fueron realizadas de manera individual.
      </p>
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>SCSS</li>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>Spring Boot</li>
        <li>Java</li>
        <li>MySQL</li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/FirstTrain-Angular" target="_blank">Frontend</Link> - 
      <Link className="icon2" to="https://github.com/roldanordonez1990/FirstTrain-Backend" target="_blank"> Backend</Link></h3>
      <div className="arrow">
        <a href="#container-proyectos"><i className='fas fa-arrow-circle-up'></i></a>
      </div>
    </div>
    </>
  )
}
