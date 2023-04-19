import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const About = () => {
  //código con el cual hemos conseguido anclar enlaces desde otra página
  const { id } = useParams();

  useEffect(() => {
    switch(id){
      case "hostgreen":
      const section1 = document.getElementById("hostgreen");
      window.scrollTo({
        top: section1.offsetTop,
        behavior: "smooth"
      });
      document.getElementById("hostgreen").style.color = "#ab8616";
      break;

      case "nttdata":
        const section2 = document.getElementById("nttdata");
        window.scrollTo({
          top: section2.offsetTop,
          behavior: "smooth"
        });
      document.getElementById("nttdata").style.color = "#ab8616";
      break;
      default:
    }

  }, [id]);
  //código con el cual hemos conseguido anclar enlaces desde otra página

  const handleClickArrow = (e) => {
    const section = document.querySelector('#inicio-about');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  const handleClickExperiencia = (e) => {
    const section = document.querySelector('#experiencia');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("formacion").style.color = "";
    document.getElementById("experiencia").style.color = "#ab8616";
    document.getElementById("skills").style.color = "";
  };

  const handleClickFormacion = (e) => {
    const section = document.querySelector('#formacion');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("formacion").style.color = "#ab8616";
    document.getElementById("experiencia").style.color = "";
    document.getElementById("skills").style.color = "";
  };

  const handleClickSkills = (e) => {
    const section = document.querySelector('#skills');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });

    document.getElementById("formacion").style.color = "";
    document.getElementById("experiencia").style.color = "";
    document.getElementById("skills").style.color = "#ab8616";
  };

  return (
    <>
      <section id="inicio-about" className="container-about">
        <ul className="servicio-list2">
          <li className="texto-servicio-list2">
            <Link to="#experiencia" onClick={(e) =>handleClickExperiencia(e)}>
            <span className="material-symbols-outlined">work_history</span>
            </Link>
          </li>
          <li className="texto-servicio-list1">
            <Link to="#formacion" onClick={(e) =>handleClickFormacion(e)}>
            <span className="material-symbols-rounded">school</span>
            </Link>
          </li>
          <li className="texto-servicio-list2">
            <Link to="#skills" onClick={(e) =>handleClickSkills(e)}>
            <span className="material-symbols-outlined">workspace_premium</span>
            </Link>
          </li>
        </ul>
        <p className="p-cv">
          <h4 id="cv"><a className="cv" href="../docs/CV_Francisco_Roldan.pdf" download>Descargar CV</a></h4>
        </p>
        <hr className="separador-about2"/>
        <div className="about-box">
          <div className="f2">
            <h3 id="experiencia">01. Experiencia en el sector IT</h3>
            <p>
              <strong>
                <Link id="nttdata" className="icon2 titulacion" to="https://www.nttdata.com/global/en/" target="_blank">
                2022-Actualidad. NTT DATA:
                </Link>
              </strong>
              <br/>
              <span className="titulacion">QA Tester y Especialista en Automatización de Pruebas</span> para el proyecto de banca digital&nbsp; 
              <strong><Link className="icon2 titulacion" to="https://www.caixabank.es/particular/bancadistancia/caixabanknow_es.html" target="_blank">
                 CaixabankNow.
                </Link>
              </strong>
              &nbsp;Mi trabajo
              consiste en garantizar una mayor calidad del software
              tanto en la versión web como en la aplicación móvil, combinando pruebas
              funcionales unitarias e integradas, así como en la automatización
              de las mismas por medio de herramientas como <span className="titulacion">Selenium Web Driver
              y Appium</span> en <span className="titulacion">Java</span>. 
              La metodología empleada dentro del proyecto para la gestión del trabajo diario es <span className="titulacion"> Kanban</span>, 
              combinando herramientas como <span className="titulacion">Rally</span> y <span className="titulacion">Jira</span> para su organización, con el principal objetivo de maximizar la calidad en las entregas de las tareas al cliente.
            </p>
            <p>
              <strong>
              <Link id="hostgreen" className="icon2 titulacion" to="https://www.hostgreen.es/" target="_blank">
                2021-2022. Hostgreen:
              </Link> 
              </strong>
              <br/>
              <span className="titulacion">Desarrollador Web Full Stack</span> en el proyecto
              de comercio electrónico&nbsp;
              <strong>
              <Link className="icon2 titulacion" to="https://www.adivin.com/" target="_blank">
                Adivin.
              </Link>
              </strong>
              &nbsp;Desarrollo y mantenimiento de su página web, base de datos y CRM
              de software libre con <span className="titulacion">PHP</span>.
            </p>
            <hr className="separador-about"/>
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="formacion">02. Formación</h3>
            <p>
              -
              <strong>
               <span className="titulacion">2019-2021. CFGS en Desarrollo de Aplicaciones Web (DAW)</span> </strong> por
                el <span className="titulacion">IES Marqués de Comares de Lucena (Córdoba). </span>&nbsp;
            </p>
            <p>
              La tecnología forma parte de mi vida no sólo en el ámbito laboral,
              sino que también la aplico para tener una continua formación y
              actualización para proyectos personales o por petición externa.
            </p>
            <p>
              -
              <strong>
               <span className="titulacion">2014-2015. Máster en Desarrollo Territorial Sostenible </span> </strong> por
                la <span className="titulacion">por la UAM.</span>&nbsp;
            </p>
            <p>
              -
              <strong>
               <span className="titulacion">2008-2013. Licenciado en Geografía </span> </strong> por
                la <span className="titulacion">por la UMA.</span>&nbsp;
            </p>
            <hr className="separador-about"/>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">03. Habilidades</h3>
            <span>HTML</span>
            <div className="container-skills">
              <div className="skills html">90%</div>
            </div>
            <span>CSS</span>
            <div className="container-skills">
              <div className="skills css">70%</div>
            </div>
            <span>JavaScript</span>
            <div className="container-skills">
              <div className="skills js">75%</div>
            </div>
            <span>Java</span>
            <div className="container-skills">
              <div className="skills java">70%</div>
            </div>
            <span>PHP</span>
            <div className="container-skills">
              <div className="skills php">70%</div>
            </div>
            <span>SQL</span>
            <div className="container-skills">
              <div className="skills sql">75%</div>
            </div>
            <span>Git</span>
            <div className="container-skills">
              <div className="skills git">70%</div>
            </div>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <hr className="separador-skills"/>
            <span>Spring Boot</span>
            <div className="container-skills">
              <div className="skills spring">55%</div>
            </div>
            <span>Selenium</span>
            <div className="container-skills">
              <div className="skills selenium">70%</div>
            </div>
            <span>Appium</span>
            <div className="container-skills">
              <div className="skills appium">65%</div>
            </div>
            <span>React</span>
            <div className="container-skills">
              <div className="skills react">40%</div>
            </div>
            <span>Angular</span>
            <div className="container-skills">
              <div className="skills angular">40%</div>
            </div>
            <span>Laravel</span>
            <div className="container-skills">
              <div className="skills laravel">40%</div>
            </div>
          </div>
        </div>
        <div className="arrow-about" >
          <Link to="#inicio-about" onClick={(e) =>handleClickArrow(e)}><i className='fas fa-arrow-circle-up'></i></Link>
        </div>
      </section>
    </>
  );
};
