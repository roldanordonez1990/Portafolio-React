import React from "react";
import { Link } from "react-router-dom";

export const Servicios = () => {

  const handleClickArrow = (e) => {
    const section = document.querySelector('#servicios-container');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleClickDaw = (e) => {
    const section = document.querySelector('#daw');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("daw").style.color = "#ab8616";
    document.getElementById("qa").style.color = "";
    document.getElementById("auto").style.color = "";
  };

  const handleClickQa = (e) => {
    const section = document.querySelector('#qa');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("daw").style.color = "";
    document.getElementById("qa").style.color = "#ab8616";
    document.getElementById("auto").style.color = "";
  };

  const handleClickAuto = (e) => {
    const section = document.querySelector('#auto');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("daw").style.color = "";
    document.getElementById("qa").style.color = "";
    document.getElementById("auto").style.color = "#ab8616";
  };

  return (
    <>
      <section id="servicios-container" className="servicios-container">
        <div className="servicio-div-texto">
          <ul className="servicio-list">
              <li className="texto-servicio-list1"><Link onClick={(e) =>handleClickDaw(e)} to="#daw"><span className="material-symbols-rounded">laptop_chromebook</span></Link></li>
              <li className="texto-servicio-list2"><Link onClick={(e) =>handleClickQa(e)} to="#qa"><span className="material-symbols-outlined">mobile_friendly</span></Link></li>
              <li className="texto-servicio-list3"><Link onClick={(e) =>handleClickAuto(e)} to="#auto"><span className="material-symbols-outlined">play_circle</span></Link></li>
          </ul>
          <hr className="separador-about2"/>
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
            <p className="texto-servicios3">
            <strong>¿Quieres saber más sobre alguna de ellas o tienes interés en aplicarlas?</strong>
          </p>
          <p className="pBtn texto-servicios">
            <Link to="/contacto">
              <span className="btn-special3">Contacta conmigo</span>
            </Link> 
          </p>
          </div>
          <Link className="arrow-servicios" to="#servicios-container" onClick={(e) =>handleClickArrow(e)}><i className='fas fa-arrow-circle-up'></i></Link>
      </section>
    </>
  );
};
