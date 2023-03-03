import React from "react";
import { Link } from "react-router-dom";
import { ListadoProyectos } from "./ListadoProyectos";

export const Inicio = () => {
  return (
    <>
      <section className="contenido-inicio">
        <div className="boxs">
            <h2>
              ¡Hola! Soy
              <span className="name"> Francisco José Roldán Ordóñez</span>
            </h2>
            <hr className="separador-nombre" />
            <p className="">
              <strong>Desarrollador de Aplicaciones Web</strong> y
              <strong> QA Tester</strong>. Tengo experiencia en proyectos de
              comercio electrónico y del sector bancario en el ámbito nacional.
            </p>
            <p>
              Actualmente trabajo como <strong>QA tester</strong> y
              <strong> Automatización</strong> con categoría <span className="correo-personal">Testing
              Specialist</span>, en remoto, desde Málaga (España).
            </p>
            <p className="ajustepBtn">
              Tengo interés por las nuevas tecnologías tanto dentro del ámbito
              laboral como fuera de este. Reflejándose así en retos personales y en la
              consecución de los mismos.
            </p>
            <p className="pBtn">
              <Link to="/contacto">
                <span class="btn-special3">Contacta conmigo</span>
              </Link> 
            </p>
        </div>
        <div className="boxs">
          <div className="box2">
            <img alt="logo" src="/images/foto22.png" />
          </div>
        </div>
      </section>
      <hr className="separador-end" />
      <h2 className="titulo-boxs">¿Qué servicios ofrece mi trabajo?</h2>
      <article className="cards">
          <div className="card">
            <span class="material-symbols-rounded">laptop_chromebook</span>
            <Link to="/contacto">
            <span className="texto-box1">Desarrollo Web</span>
            </Link>
          </div>
          <div className="card">
            <span class="material-symbols-outlined">mobile_friendly</span>
            <Link to="/contacto">
            <span className="texto-box2">QA</span>
            </Link>
          </div>
          <div className="card">
          <span class="material-symbols-outlined">play_circle</span>
            <Link to="/contacto">
            <span className="texto-box3">Automatización</span>
            </Link>
          </div>
      </article>
      <h2 className="titulo-proyects">Algunos de mis proyectos</h2>
      <ListadoProyectos limite="2"/>
    </>
  );
};
