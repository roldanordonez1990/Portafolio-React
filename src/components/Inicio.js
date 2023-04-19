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
              <span className="name"> Francisco José Roldán</span>
            </h2>
            <hr className="separador-nombre" />
            <p>
              <strong>Desarrollador de Aplicaciones Web</strong> y
              <strong> QA Tester</strong>. Tengo experiencia en proyectos de
              comercio electrónico y del sector bancario en el ámbito nacional.
            </p>
            <p>
              Actualmente trabajo como <strong>QA Tester</strong> y
              <strong> Especialista en Automatización de Pruebas</strong> con categoría <span className="correo-personal">Testing
              Specialist</span>, en remoto, desde Málaga (España).
            </p>
            <p className="ajustepBtn">
            Me interesan las últimas tendencias en tecnología y busco constantemente nuevos desafíos para lograr mis objetivos personales y profesionales 
            en este ámbito en constante evolución.
            </p>
            <p className="pBtn">
              <Link to="/contacto">
                <span className="btn-special3">Contacta conmigo</span>
              </Link> 
            </p>
        </div>
        <div className="boxs">
          <div className="box2">
            <img alt="logo" src="/images/foto.png" />
          </div>
        </div>
      </section>
      <hr className="separador-end" />
      <h2 className="titulo-boxs1">¿Qué servicios ofrece mi trabajo?</h2>
      <article className="cards">
          <div className="card">
            <Link to="/servicios/daw">
            <span className="material-symbols-rounded">laptop_chromebook</span>
            <span className="texto-box1">Desarrollo Web</span>
            </Link>
          </div>
          <div className="card">
            <Link to="/servicios/qa">
            <span className="material-symbols-outlined">mobile_friendly</span>
            <span className="texto-box2">QA</span>
            </Link>
          </div>
          <div className="card">
            <Link to="/servicios/auto">
            <span className="material-symbols-outlined">play_circle</span>
            <span className="texto-box3">Automatización</span>
            </Link>
          </div>
      </article>
      <h2 className="titulo-boxs2">Experiencia profesional</h2>
      <section className="experiencia-container">    
            <div className="exp-box">
              <div className="item-mask1">
                <Link to="/about/hostgreen">
                <img src="/images/hostgreen1.png" alt="ntt" />
                </Link>
              </div>
                <span className="titulo-exp"><strong>Desarrollador Web</strong></span>
                <br/>
                <span className="texto-tecnologias">Proyecto: Adivin (2021-2022)</span>
                <br/>
                <span className="texto-tecnologias">PHP, HTML5, CSS3, JavaScript y MySQL</span>
                <hr className="hr-exp"/>
            </div>
            <div className="exp-box">
              <div className="item-mask1">
                <Link to="/about/nttdata">
                <img src="/images/ntt.png" alt="ntt" />
                </Link>
              </div>
                <span className="titulo-exp"><strong>QA Tester | Automatización</strong></span>
                <br/>
                <span className="texto-tecnologias">Proyecto: CaixaBankNow (2022-Actualidad)</span>
                <br/>
                <span className="texto-tecnologias">Java: Selenium Web Driver/Appium</span>
                <hr className="hr-exp"/>
            </div>
      </section>
      <h2 className="titulo-proyects">Algunos de mis proyectos personales</h2>
      <ListadoProyectos limite="2"/>
    </>
  );
};
