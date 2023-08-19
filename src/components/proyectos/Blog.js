import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Blog = () => {
  const handleClickArrow = (e) => {
    const section = document.querySelector("#container-proyectos");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="container-proyectos" className="container-proyectos">
        <h2 className="container-proyectos-titulo">
          Proyecto de un blog con React - Vite.{" "}
          <span className="name">"Blog de artículos"</span>
        </h2>
        <p className="p-container-proyectos">
          Aplicación web completa usando MERN Stack (MongoDB, Express, React y
          Node.js)
        </p>
        <Carousel>
          <div>
            <img src="/images/blog.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/blog1.png" alt="2" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/blog2.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/blog3.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/blog4.png" alt="1" />
            <p className="legend1"></p>
          </div>
        </Carousel>
        <h3 className="about-proyect">Acerca de este proyecto</h3>
        <p>2023.</p>
        <p>
          Esta aplicación surge con la idea de poner en práctica la combinación
          de diferentes tecnologías para crear un único proyecto. En este caso,
          un blog de artículos personales donde se emplea la libreía de{" "}
          <span className="titulacion">JS, React</span> creado con
          <span className="titulacion">Vite</span> para representar la vista. La
          idea era desarrollar un CRUD (
          <span className="titulacion">Create, Read, Update and Delete</span>)
          en una aplicación de escritorio totalemente dinámica con una{" "}
          <span className="titulacion">API Rest</span> a modo de{" "}
          <span className="titulacion">backend</span> que devolviese datos al
          usuario de forma asíncrona, incluyendo una conexión con una base de
          datos no relacional haciendo uso de{" "}
          <span className="titulacion">Mongo DB</span> y de la librería{" "}
          <span className="titulacion">Mongoose </span> para establecer la
          conexión. Para las peticiones <span className="titulacion">Ajax</span>{" "}
          a la <span className="titulacion">API Rest</span>, se utiliza el{" "}
          <span className="titulacion"> framework Express.</span>
        </p>
        <p>
          El diseño y la maquetación presentan un aspecto bastante básico, en el
          cual no he prestado mucho interés. La prioridad era la puesta en
          práctica de las diferentes tecnologías que forman la aplicación así como su funcionalidad.
        </p>
        <p>
          Todas las funciones de este proyecto fueron realizadas de manera
          individual.
        </p>
        <h3 className="about-proyect">Tecnologías empleadas</h3>
        <ul className="listado-tecnologias">
          <li>JSX</li>
          <li>CSS</li>
          <li>React (Vite)</li>
          <li>JS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Mongo DB</li>
          <li>Mongoose</li>
          <li>Validator</li>
          <li>Multer</li>
        </ul>
        <h3 className="link-proyect">
          Acceso al código fuente:{" "}
          <Link
            className="icon2"
            to="https://github.com/roldanordonez1990/015-vite-blog"
            target="_blank"
          >
            Frontend
          </Link>{" "}
          -
          <Link
            className="icon2"
            to="https://github.com/roldanordonez1990/api-rest-node"
            target="_blank"
          >
            {" "}
            Backend API Rest
          </Link>
        </h3>
        <div className="arrow">
          <Link to="#container-proyectos" onClick={(e) => handleClickArrow(e)}>
            <i className="fas fa-arrow-circle-up"></i>
          </Link>
        </div>
      </div>
    </>
  );
};
