import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const About = () => {
  //código con el cual hemos conseguido anclar enlaces desde otra página
  const { id } = useParams();

  useEffect(() => {
    switch (id) {
      case "hostgreen":
        const section1 = document.getElementById("hostgreen");
        window.scrollTo({
          top: section1.offsetTop,
          behavior: "smooth",
        });
        document.getElementById("hostgreen").style.color = "#ab8616";
        break;

      case "nttdata":
        const section2 = document.getElementById("nttdata");
        window.scrollTo({
          top: section2.offsetTop,
          behavior: "smooth",
        });
        document.getElementById("nttdata").style.color = "#ab8616";
        break;
      default:
    }
  }, [id]);
  //código con el cual hemos conseguido anclar enlaces desde otra página

  const handleClickArrow = (e) => {
    const section = document.querySelector("#inicio-about");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  const handleClickExperiencia = (e) => {
    const section = document.querySelector("#experiencia");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    document.getElementById("formacion").style.color = "";
    document.getElementById("experiencia").style.color = "#ab8616";
    document.getElementById("skills").style.color = "";
  };

  const handleClickFormacion = (e) => {
    const section = document.querySelector("#formacion");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });

    document.getElementById("formacion").style.color = "#ab8616";
    document.getElementById("experiencia").style.color = "";
    document.getElementById("skills").style.color = "";
  };

  const handleClickSkills = (e) => {
    const section = document.querySelector("#skills");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
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
            <Link to="#experiencia" onClick={(e) => handleClickExperiencia(e)}>
              <span className="material-symbols-outlined">work_history</span>
            </Link>
          </li>
          <li className="texto-servicio-list1">
            <Link to="#formacion" onClick={(e) => handleClickFormacion(e)}>
              <span className="material-symbols-rounded">school</span>
            </Link>
          </li>
          <li className="texto-servicio-list2">
            <Link to="#skills" onClick={(e) => handleClickSkills(e)}>
              <span className="material-symbols-outlined">
                workspace_premium
              </span>
            </Link>
          </li>
        </ul>
        <p className="p-cv">
          <h4 id="cv">
            <a className="cv" href="../docs/CV_Francisco_Roldan.pdf" download>
              Descargar CV
            </a>
          </h4>
        </p>
        <hr className="separador-about2" />
        <div className="about-box">
          <div className="f2">
            <h3 id="experiencia">01. Experiencia en el sector IT</h3>
            <ul>
              <li>
                <p>
                  <strong>
                    <Link
                      id="nttdata"
                      className="icon2 titulacion"
                      to="https://www.nttdata.com/global/en/"
                      target="_blank"
                    >
                      2022-Actualidad. NTT DATA:
                    </Link>
                  </strong>
                  <br />
                  <span className="titulacion">
                    QA Tester y Especialista en Automatización de Pruebas
                  </span>{" "}
                  para el proyecto de banca digital&nbsp;
                  <strong>
                    <Link
                      className="icon2 titulacion"
                      to="https://www.caixabank.es/particular/bancadistancia/caixabanknow_es.html"
                      target="_blank"
                    >
                      CaixabankNow.
                    </Link>
                  </strong>
                  &nbsp;Garantizar una mayor calidad del
                  software tanto en la versión web como en la aplicación móvil,
                  combinando pruebas funcionales integradas, así
                  como en la automatización de las mismas por medio de
                  herramientas como{" "}
                  <span className="titulacion">
                    Selenium Web Driver y Appium
                  </span>{" "}
                  en <span className="titulacion">Java</span>. La metodología
                  del trabajo
                  diario es <span className="titulacion"> Kanban</span>,
                  combinando herramientas como{" "}
                  <span className="titulacion">Rally</span> y{" "}
                  <span className="titulacion">Jira</span> para su organización,
                  con el principal objetivo de maximizar la calidad en las
                  entregas de las tareas al cliente.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    <Link
                      id="hostgreen"
                      className="icon2 titulacion"
                      to="https://www.hostgreen.es/"
                      target="_blank"
                    >
                      2021-2022. Hostgreen:
                    </Link>
                  </strong>
                  <br />
                  <span className="titulacion">
                    Desarrollador Web Full Stack
                  </span>{" "}
                  en el proyecto de comercio electrónico&nbsp;
                  <strong>
                    <Link
                      className="icon2 titulacion"
                      to="https://www.adivin.com/"
                      target="_blank"
                    >
                      Adivin.
                    </Link>
                  </strong>
                  &nbsp;Desarrollo y mantenimiento de su página web, base de
                  datos y CRM de software libre con{" "}
                  <span className="titulacion">PHP</span>.
                </p>
              </li>
            </ul>

            <hr className="separador-about" />
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="formacion">02. Formación</h3>
            <ul>
              <li>
                <strong>
                  <span className="titulacion">
                    2019-2021. CFGS en Desarrollo de Aplicaciones Web (DAW)
                  </span>{" "}
                </strong>{" "}
                por el{" "}
                <span className="titulacion">
                  IES Marqués de Comares (Lucena, Córdoba).
                </span>
                &nbsp;
              </li>
              <li>
                <strong>
                  <span className="titulacion">
                    2014-2015. Máster en Desarrollo Territorial Sostenible
                  </span>{" "}
                </strong>{" "}
                por la <span className="titulacion">UAM.</span>&nbsp;
              </li>
              <li>
                <strong>
                  <span className="titulacion">
                    2008-2013. Licenciado en Geografía{" "}
                  </span>{" "}
                </strong>{" "}
                por la <span className="titulacion">UMA.</span>&nbsp;
              </li>
            </ul>

            <p>
              La tecnología forma parte de mi vida no sólo en el ámbito laboral,
              sino que también la aplico para tener una continua formación y
              actualización para proyectos personales o por petición externa.
            </p>

            <hr className="separador-about" />
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">03. Habilidades/Conocimientos generales</h3>
            <section className="experiencia-container">
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/html.png" alt="html" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2 css-mask">
                  <img src="/images/css.png" alt="css" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/js.png" alt="js" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/node1.png" alt="node" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2 java-mask">
                  <img src="/images/java.png" alt="java" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2 php-mask">
                  <img src="/images/php1.png" alt="php" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/selenium1.png" alt="selenium" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/appium.png" alt="appium" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/karate1.png" alt="karate" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/sql.png" alt="sql" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/mongodb1.png" alt="mongo" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/git.png" alt="git" />
                </div>
              </div>
            </section>
            <hr className="separador-about" />
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">04. Habilidaes/Frameworks</h3>
            <section className="experiencia-container">
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/react1.png" alt="react" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/angular1.png" alt="angular" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/spring.png" alt="spring " />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/laravel1.png" alt="spring " />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="arrow-about">
          <Link to="#inicio-about" onClick={(e) => handleClickArrow(e)}>
            <i className="fas fa-arrow-circle-up"></i>
          </Link>
        </div>
      </section>
    </>
  );
};
