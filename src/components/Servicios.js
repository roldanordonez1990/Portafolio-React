import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Servicios = () => {
  //código con el cual hemos conseguido anclar enlaces desde otra página
  const { id } = useParams();
  
  useEffect(() => {
    const ORIGINAL_COLOR = ""; // puedes usar el color original si no es heredado
    let highlightTimeout;
    let scrollListenerTimeout;
    let target = null;
  
    switch(id){
      case "daw":
        const section1 = document.querySelector('#daw');
        target = section1;
        window.scrollTo({
          top: section1.offsetTop,
          behavior: 'smooth',
        });
        highlightTimeout = setTimeout(() => {
          section1.style.color = "#ab8616";
        }, 300);
        break;
  
      case "qa":
        const section2 = document.querySelector('#qa');
        target = section2;
        window.scrollTo({
          top: section2.offsetTop,
          behavior: 'smooth',
        });
        highlightTimeout = setTimeout(() => {
          section2.style.color = "#ab8616";
        }, 300);
        break;
  
      case "auto":
        const section3 = document.querySelector('#auto');
        target = section3;
        window.scrollTo({
          top: section3.offsetTop,
          behavior: 'smooth',
        });
        highlightTimeout = setTimeout(() => {
          section3.style.color = "#ab8616";
        }, 300);
        break;
  
      default:
        break;
    }
  
    // Añadir el listener después de un pequeño delay
    scrollListenerTimeout = setTimeout(() => {
      const handleScroll = () => {
        if (target) {
          target.style.color = ORIGINAL_COLOR;
        }
        window.removeEventListener('scroll', handleScroll);
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 800);
  
    // Limpieza
    return () => {
      clearTimeout(highlightTimeout);
      clearTimeout(scrollListenerTimeout);
      // No usamos función anónima aquí para eliminar el listener correctamente
      window.removeEventListener('scroll', () => {});
    };
  }, [id]);
  
  //código con el cual hemos conseguido anclar enlaces desde otra página

  const handleClickArrow = (e) => {
    const section = document.querySelector('#servicios-container');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section id="servicios-container" className="servicios-container">
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
            <h3 id="auto">Automatización de Pruebas</h3> 
            <p className="texto-servicios2">
            - Control de calidad del software de forma automática y monitorizado.
            </p>
            <p className="texto-servicios2">
            - Testeo automático de aplicaciones web y móviles.
            </p>
            <p className="texto-servicios2">
            - Testeo automático de API Rest
            </p>
            <p className="texto-servicios2">
            - Diseño y creación de planes y casos de prueba automatizables.
            </p>
            <p className="texto-servicios2">
            - Optimización de recursos y tiempo de ejecución.
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
