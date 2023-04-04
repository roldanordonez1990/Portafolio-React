import React from "react";
import { Link } from "react-router-dom";

export const Servicios = () => {

  const activarDaw = (e) =>{
    document.getElementById("daw").style.color = "#ab8616";
    document.getElementById("qa").style.color = "";
    document.getElementById("auto").style.color = "";
  }

  const activarQa = (e) =>{
    document.getElementById("daw").style.color = "";
    document.getElementById("qa").style.color = "#ab8616";
    document.getElementById("auto").style.color = "";
  }

  const activarAuto = (e) =>{
    document.getElementById("daw").style.color = "";
    document.getElementById("qa").style.color = "";
    document.getElementById("auto").style.color = "#ab8616";
  }
  return (
    <>
      <section className="servicios-container">
        <div className="servicio-div-texto">
          <p id="texto-servicios" className="texto-servicios">
            Este apartado está enfocado en mostrar y dar a conocer las distintas
            áreas sobre las cuales trabajo a nivel laboral y personal dentro del
            <strong> desarrollo web </strong>
            y cómo estas pueden aplicarse en cualquier ámbito de manera útil. 
            
          </p>
          
          <ul className="servicio-list">
              <li className="texto-servicio-list1"><a onClick={(e) =>activarDaw(e)} href="#daw"><span className="material-symbols-rounded">laptop_chromebook</span></a></li>
              <li className="texto-servicio-list2"><a onClick={(e) =>activarQa(e)} href="#qa"><span className="material-symbols-outlined">mobile_friendly</span></a></li>
              <li className="texto-servicio-list3"><a onClick={(e) =>activarAuto(e)} href="#auto"><span className="material-symbols-outlined">play_circle</span></a></li>
          </ul>
          <hr className="separador-servicios"/> 
          <p className="texto-servicios3">
            <strong>¿Quieres saber más sobre alguna de ellas o tienes interés en aplicarlas?</strong>
          </p>
          <p className="pBtn texto-servicios">
              <Link to="/contacto">
                <span className="btn-special3">Contacta conmigo</span>
              </Link> 
            </p>
        </div>
          <div className="servicio-div-texto2">
            <h3 id="daw">Desarrollo Web</h3> 
            <p className="texto-servicios2">
            - Creación de páginas web estáticas y dinámicas.</p>
            <p className="texto-servicios2">
            - Diseño y maquetación.
            </p>
            <p className="texto-servicios2">
            - Gestión de bases de datos.
            </p>
            <p className="texto-servicios2">
            - Creatividad.
            </p>
            <p className="texto-servicios2">
            - Adaptación a dispositivos móviles.
            </p>
            <p className="texto-servicios2">
            - Posicionamiento SEO.
            </p>
            <h3 id="qa">Quality Assurance</h3> 
            <p className="texto-servicios2">
            - Control de calidad del software.
            </p>
            <p className="texto-servicios2">
            - Testeo funcional de aplicaciones web y móviles.
            </p>
            <p className="texto-servicios2">
            - Pruebas unitarias e integradas.
            </p>
            <p className="texto-servicios2">
            - Diseño y creación de planes y casos de prueba.
            </p>
            <p className="texto-servicios2">
            - Gestión de incidencias.
            </p>
            <h3 id="auto">Automatización de Pruebas</h3> 
            <p className="texto-servicios2">
            - Control de calidad del software de forma automática.
            </p>
            <p className="texto-servicios2">
            - Testeo automático de aplicaciones web y móviles.
            </p>
            <p className="texto-servicios2">
            - Diseño y creación de planes y casos de prueba automatizables.
            </p>
            <p className="texto-servicios2">
            - Optimización del tiempo de ejecución.
            </p>
          </div>
          <a className="arrow-servicios" href="#texto-servicios"><i className='fas fa-arrow-circle-up'></i></a>
      </section>
    </>
  );
};
