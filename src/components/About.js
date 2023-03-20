import React from "react";
import { Link } from "react-router-dom";

export const About = () => {

  const activarFormacion = (e) =>{
    document.getElementById("formacion").style.color = "#ab8616";
    document.getElementById("experiencia").style.color = "";
    document.getElementById("skills").style.color = "";
  }

  const activarExperiencia = (e) =>{
    document.getElementById("formacion").style.color = "";
    document.getElementById("experiencia").style.color = "#ab8616";
    document.getElementById("skills").style.color = "";
  }

  const activaSkills = (e) =>{
    document.getElementById("formacion").style.color = "";
    document.getElementById("experiencia").style.color = "";
    document.getElementById("skills").style.color = "#ab8616";
  }
  return (
    <>
      <section id="inicio-about" className="container-about">
        <ul className="servicio-list2">
          <li className="texto-servicio-list1">
            <a href="#formacion" onClick={(e) =>activarFormacion(e)}>
            <span className="material-symbols-rounded">school</span>
            </a>
          </li>
          <li className="texto-servicio-list2">
            <a href="#experiencia" onClick={(e) =>activarExperiencia(e)}>
            <span className="material-symbols-outlined">work_history</span>
            </a>
          </li>
          <li className="texto-servicio-list2">
            <a href="#skills" onClick={(e) =>activaSkills(e)}>
            <span className="material-symbols-outlined">workspace_premium</span>
            </a>
          </li>
        </ul>
        <hr className="separador-about"/>
        <div className="about-box">
          <div className="f2">
            <h3 id="formacion">01. Mi formación</h3>
            <p>
              Mis estudios oficiales como desarrollador web parten de la
              obtención del título{" "}
              <strong>CFGS en Desarrollo de Aplicaciones Web (DAW)</strong> por
              el IES Marqués de Comares de Lucena (Córdoba) 2019-2021
            </p>
            <p>
              La tecnología forma parte de mi vida no sólo en el ámbito laboral,
              sino que también la aplico para tener una continua formación y
              actualización para proyectos personales o por petición externa.
            </p>
            <p>
              También soy Licenciado en Geografía por la UMA
              2008-2013 y con titulación de Máster de Desarrollo Territorial Sostenible por la
              UAM 2014-2015.
            </p>
            <hr className="separador-skills"/>
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="experiencia">02. Mi experiencia</h3>
            <p>
              -
              <strong>
              <Link className="icon" to="https://www.hostgreen.es/" target="_blank">
                2021-2022 - Hostgreen:
              </Link> 
              </strong>
              Desarrollador Web Full Stack en el proyecto
              de comercio electrónico
              <strong>
              <Link className="icon" to="https://www.adivin.com/" target="_blank">
                Adivin.
              </Link>
              </strong>
              Desarrollo y mantenimiento de su página web, base de datos y CRM
              de software libre.
            </p>
            <p>
              -
              <strong>
                <Link className="icon" to="https://www.nttdata.com/global/en/" target="_blank">
                2022-Actualidad - NTT DATA:
                </Link>
              </strong>
              QA Tester y Automatización para el proyecto de banca digital
              <strong><Link className="icon" to="https://www.caixabank.es/particular/bancadistancia/caixabanknow_es.html" target="_blank">
                CaixabankNow.
                </Link>
              </strong>
              Mi trabajo
              consiste en garantizar una mayor y mejor calidad del software
              tanto en la versión web como en la aplicación móvil, combinando pruebas
              funcionales unitarias e integradas, así como en la automatización
              de las mismas, por medio de herramientas como Selenium Web Driver
              y Appium en Java.
            </p>
            <hr className="separador-skills"/>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">03. Mis habilidades</h3>
            <span>HTML</span>
            <div class="container-skills">
              <div class="skills html">90%</div>
            </div>
            <span>CSS</span>
            <div class="container-skills">
              <div class="skills css">70%</div>
            </div>
            <span>JavaScript</span>
            <div class="container-skills">
              <div class="skills js">75%</div>
            </div>
            <span>Java</span>
            <div class="container-skills">
              <div class="skills java">70%</div>
            </div>
            <span>PHP</span>
            <div class="container-skills">
              <div class="skills php">70%</div>
            </div>
            <span>SQL</span>
            <div class="container-skills">
              <div class="skills sql">75%</div>
            </div>
            <span>Git</span>
            <div class="container-skills">
              <div class="skills git">70%</div>
            </div>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <hr className="separador-skills"/>
            <span>Spring Boot</span>
            <div class="container-skills">
              <div class="skills spring">55%</div>
            </div>
            <span>Selenium</span>
            <div class="container-skills">
              <div class="skills selenium">70%</div>
            </div>
            <span>Appium</span>
            <div class="container-skills">
              <div class="skills appium">65%</div>
            </div>
            <span>React</span>
            <div class="container-skills">
              <div class="skills react">30%</div>
            </div>
            <span>Angular</span>
            <div class="container-skills">
              <div class="skills angular">40%</div>
            </div>
            <span>Laravel</span>
            <div class="container-skills">
              <div class="skills laravel">40%</div>
            </div>
          </div>
        </div>
        <div className="about-box">
          <a href="#inicio-about"><i className='fas fa-arrow-circle-up'></i></a>
        </div>
      </section>
    </>
  );
};
