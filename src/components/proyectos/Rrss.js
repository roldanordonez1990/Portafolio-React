import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

export const Rrss = () => {
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
          Proyecto de una Red Social completa con React - Vite.{" "}
          <span className="name">"Red Social"</span>
        </h2>
        <p className="p-container-proyectos">
          Aplicación web completa usando MERN Stack (MongoDB, Express, React y
          Node.js)
        </p>
        <Carousel>
          <div>
            <img src="/images/rrss5.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/rrss1.png" alt="2" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/rrss4.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/rrss2.png" alt="1" />
            <p className="legend1"></p>
          </div>
          <div>
            <img src="/images/rrss6.png" alt="1" />
            <p className="legend1"></p>
          </div>
        </Carousel>
        <h3 className="about-proyect">Acerca de este proyecto</h3>
        <p>2023.</p>
        <p>
          El proyecto de la red social basado en la pila MERN (MongoDB,
          Express.js, React y Node.js) se centró en la implementación integral
          de un sistema utilizando estas tecnologías. Tuvo un enfoque
          dinámico y completo de CRUD (Crear, Leer, Actualizar y Borrar)
          mediante una API REST en el backend, con autenticación implementada a
          través de JSON Web Tokens (JWT). Se almacenaron datos de sesión de
          usuario en el local storage para mantener la información de manera
          segura y acceder a ella según fuera necesario. 
          </p>
          <p>React con Vite se
          empleó para la interfaz de usuario, mientras que MongoDB y la librería
          Mongoose se utilizaron para la base de datos no relacional,
          estableciendo una sólida conexión a través de Express para las
          solicitudes hacia la API REST. </p>
          <p>El diseño y la maquetación se
          mantuvieron simples, priorizando la funcionalidad y la aplicación
          práctica de las tecnologías.</p>
          <p>Cada aspecto del proyecto se desarrolló
          individualmente, lo que permitió una comprensión detallada de cada
          componente y su interacción dentro de la pila MERN empleada.{" "}
          </p>
          
        <h3 className="about-proyect">Tecnologías empleadas</h3>
        <ul className="listado-tecnologias">
         
          <li>React (Vite)</li>
          <li>JS</li>
          <li>JSX</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Mongo DB</li>
          <li>Mongoose</li>
          <li>JWT</li>
          <li>Validator</li>
          <li>Multer</li>
        </ul>
        <h3 className="link-proyect">
          Acceso al código fuente:{" "}
          <Link
            className="icon2"
            to="https://github.com/roldanordonez1990/Red-Social-Vite"
            target="_blank"
          >
            Frontend
          </Link>{" "}
          -
          <Link
            className="icon2"
            to="https://github.com/roldanordonez1990/api-rest-node-jwt-rrss"
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
