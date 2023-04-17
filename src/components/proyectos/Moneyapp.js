import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Moneyapp = () => {

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
      <h2 className="container-proyectos-titulo">Aplicación de control de gastos <span className='name'>"Moneyapp"</span></h2>
      <p className='p-container-proyectos'>Aplicación de escritorio para llevar un control diario de gastos y envío de dinero a otros usuarios.</p>
      <Carousel>
        <div >
          <img src="/images/moneyapp.png" alt="1" />
          <p className="legend1"></p>
        </div>
        <div>
          <img src="/images/ma1.png" alt="2" />
          <p className="legend1"></p>
        </div>
        <div >
          <img src="/images/ma2.png" alt="1" />
          <p className="legend1"></p>
        </div>
      </Carousel>
      <h3 className="about-proyect">Acerca de este proyecto</h3>
      <p>
        2021.
      </p>
      <p>
        El objetivo principal de este proyecto fue la práctica del <span className="titulacion">framework Angular</span> para la parte <span className="titulacion">front</span>. 
        La idea era desarrollar un CRUD (<span className="titulacion">Create, Read, Update and Delete</span>) en una aplicación de escritorio totalemente dinámica con un <span className="titulacion">backend</span> que devolviese datos al usuario de forma asíncrona gracias a <span className="titulacion">Angular</span>. 
        Por su parte, el <span className="titulacion">backend</span> fue desarrollado con otro <span className="titulacion">framework, Spring Boot</span>, para el trámite de información con la base de datos de forma más eficiente.
      </p>
      <p>
        Todas las funciones de este proyecto fueron realizadas de manera individual.
      </p>
      <h3 className="about-proyect">Tecnologías empleadas</h3>
      <ul className="listado-tecnologias">
        <li>HTML</li>
        <li>CSS</li>
        <li>Angular</li>
        <li>TypeScript</li>
        <li>Spring Boot</li>
        <li>Java</li>
        <li>MySQL</li>
      </ul>
      <h3 className="link-proyect">Acceso al código fuente: <Link className="icon2" to="https://github.com/roldanordonez1990/MoneyApp-Angular" target="_blank">Frontend</Link> - 
      <Link className="icon2" to="https://github.com/roldanordonez1990/MoneyApp-backend" target="_blank"> Backend</Link></h3>
      <div className="arrow">
        <Link to="#container-proyectos" onClick={(e) =>handleClickArrow(e)}><i className='fas fa-arrow-circle-up'></i></Link>
      </div>
    </div>
    </>
  )
}
