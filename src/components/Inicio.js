import React from "react";
import { Link } from "react-router-dom";
import { ListadoProyectos } from "./ListadoProyectos";

export const Inicio = () => {
  return (
    <>
      <section id="contenido-inicio" className="contenido-inicio">
        <span id="box-items"></span>
        <div className="boxs">
          <h2>
            ¡Hola! soy
            <span className="name"> Francisco Roldán</span>
          </h2>
          <hr className="separador-nombre" />
          <p>
            <strong>Desarrollador de Aplicaciones Web</strong> y
            <strong> QA Automation Engineer</strong>. Experiencia en proyectos
            del sector bancario, turístico y comercio electrónico.
          </p>
          <p>
            Actualmente como <strong>QA Automation</strong>, he desarrollado
            habilidades sólidas en la creación y ejecución de test
            automatizados, garantizando la calidad del software.
          </p>
          <p className="ajustepBtn">
            Me interesan las últimas tendencias en tecnología y busco
            constantemente nuevos desafíos para lograr mis objetivos personales
            y profesionales en este ámbito en constante evolución.
          </p>
          <p className="pBtn">
            <Link to="/contacto">
              <span className="btn-special3">Contacta conmigo</span>
            </Link>
          </p>
        </div>
        <div className="boxs">
          <div className="box2">
            <img alt="logo" src="/images/fotooo.png" />
          </div>
        </div>
      </section>
      <hr className="separador-end" />
      <h2 className="titulo-boxs1">¿Qué servicios ofrece mi trabajo?</h2>

      <div className="cards cardz">
        <Link className="linkservices" to="/servicios/daw">
          <div className="cardzz red">
            <img alt="logo" src="/images/icons8-desarrollo-web-50.png" />

            <p className="tip">Desarrollo Web</p>
          </div>
        </Link>
        <Link className="linkservices" to="/servicios/auto">
          <div className="cardzz blue">
            <img alt="logo" src="/images/icons8-configuraci-n-3-unscreen.gif" />
            <p className="tip">Automatizacion</p>
          </div>
        </Link>
        <Link className="linkservices" to="/servicios/qa">
          <div className="cardzz green">
            <img alt="logo" src="/images/icons8-insecto-64.png" />
            <p className="tip qatext">QA</p>
          </div>
        </Link>
      </div>

      <article className="cards">
        <div className="card">
          <Link to="/servicios/daw">
            <span className="material-symbols-rounded">laptop_chromebook</span>
            <span className="texto-box1">Desarrollo Web</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/servicios/auto">
            <span className="material-symbols-outlined">play_circle</span>
            <span className="texto-box3">Automatización</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/servicios/qa">
            <span className="material-symbols-outlined">mobile_friendly</span>
            <span className="texto-box2">QA</span>
          </Link>
        </div>
      </article>
      <h2 className="titulo-boxs2">Experiencia profesional</h2>
      <section className="experiencia-container">
        <div className="exp-box">
          <div className="item-mask1">
            <Link to="/about/hostgreen">
              <img src="/images/hostgreen1.png" alt="hostgreen" />
            </Link>
          </div>
          <span className="titulo-exp">
            <strong>Desarrollador Web</strong>
          </span>
          <br />
          <span className="texto-tecnologias">
            Proyecto: Adivin (2021-2022)
          </span>
          <br />
          <span className="texto-tecnologias">
            PHP, HTML5, CSS3, JavaScript y SQL
          </span>
          <hr className="hr-exp" />
        </div>
        <div className="exp-box">
          <div className="item-mask1">
            <Link to="/about/nttdata">
              <img src="/images/ntt.png" alt="ntt" />
            </Link>
          </div>
          <span className="titulo-exp">
            <strong>QA Automation | Tester</strong>
          </span>
          <br />
          <span className="texto-tecnologias">
            Proyecto: CaixaBankNow (2022-2025)
          </span>
          <br />
          <span className="texto-tecnologias">
            Java: Selenium WebDriver | Appium
          </span>
          <hr className="hr-exp" />
        </div>
        <div className="exp-box">
          <div className="item-mask1">
            <Link to="/about/lleego">
              <img src="/images/Lleego.png" alt="lleego" />
            </Link>
          </div>
          <span className="titulo-exp">
            <strong>QA Automation Engineer</strong>
          </span>
          <br />
          <span className="texto-tecnologias">
            Proyecto: Transport bookings (2025-Actualidad)
          </span>
          <br />
          <span className="texto-tecnologias">
            JavaScript, Postman, Cypress
          </span>
          <hr className="hr-exp" />
        </div>
      </section>
      <h2 className="titulo-proyects">Algunos de mis proyectos personales</h2>
      <ListadoProyectos limite="2" />
    </>
  );
};
