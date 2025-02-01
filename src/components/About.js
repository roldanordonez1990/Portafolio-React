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

      case "lleego":
        const section3 = document.getElementById("lleego");
        window.scrollTo({
          top: section3.offsetTop,
          behavior: "smooth",
        });
        document.getElementById("lleego").style.color = "#ab8616";
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

  /*
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
  */

  return (
    <>
      <section id="inicio-about" className="container-about">
        {/*
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
        */}
        <div className="about-box">
          <div className="f2">
            <h3 id="">01. Descargar CV</h3>
            <div className="ijo">
              <ul>
                <li>
                  <p className="p-cv">
                    <h4 id="cv">
                      <a
                        className="cv"
                        href="../docs/CV_Francisco_Roldan.pdf"
                        download
                      >
                        Francisco Roldán CV pdf
                      </a>
                    </h4>
                  </p>
                </li>
              </ul>
            </div>
            <hr className="separador-about3" />
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="experiencia">02. Experiencia en el sector IT</h3>
            <div className="ijo">
              <ul>
                <li>
                  <p>
                    <strong>
                      <Link
                        id="lleego"
                        className="icon2 titulacion"
                        to="https://lleego.com/"
                        target="_blank"
                      >
                        2025-Actualidad. Lleego:
                      </Link>
                    </strong>
                    <br />
                    <span className="titulacion">
                      QA Automation Engineer
                    </span>{" "}
                    en proyecto del sector turístico&nbsp;
                    <strong>
                      <Link
                        className="icon2 titulacion"
                        to="https://lleego.com/"
                        target="_blank"
                      >
                        Lleego Travel Market
                      </Link>
                    </strong>
                    &nbsp;enfocado en garantizar la calidad del software
                    mediante pruebas automatizadas. API testing con{" "}
                    <span className="titulacion">Postman</span> y front-end con
                    <span className="titulacion"> Cypress</span>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <Link
                        id="nttdata"
                        className="icon2 titulacion"
                        to="https://www.nttdata.com/global/en/"
                        target="_blank"
                      >
                        2022-2025. NTT DATA:
                      </Link>
                    </strong>
                    <br />
                    <span className="titulacion">
                      QA Automation Engineer
                    </span>{" "}
                    para el proyecto&nbsp;
                    <strong>
                      <Link
                        className="icon2 titulacion"
                        to="https://www.caixabank.es/particular/bancadistancia/caixabanknow_es.html"
                        target="_blank"
                      >
                        CaixabankNow.
                      </Link>
                    </strong>
                    &nbsp;Garantizar la calidad del software en la aplicación
                    web y móvil combinando pruebas funcionales y automatizadas
                    con{" "}
                    <span className="titulacion">
                      Selenium WebDriver y Appium
                    </span>{" "}
                    en <span className="titulacion">Java</span>.
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
                      Desarrollador Web Full-Stack
                    </span>{" "}
                    para el proyecto e-commerce&nbsp;
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
                    datos y CRM con
                    <span className="titulacion">
                      {" "}
                      PHP, JavaScript, SQL, HTML y CSS
                    </span>
                    .
                  </p>
                </li>
              </ul>
            </div>
            <hr className="separador-about" />
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="formacion">03. Formación</h3>
            <div className="ijo">
              <ul>
                <li>
                  <p>
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
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <span className="titulacion">
                        2014-2015. Máster en Desarrollo Territorial Sostenible
                      </span>{" "}
                    </strong>{" "}
                    por la <span className="titulacion">UAM.</span>&nbsp;
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      <span className="titulacion">
                        2008-2013. Licenciado en Geografía{" "}
                      </span>{" "}
                    </strong>{" "}
                    por la <span className="titulacion">UMA.</span>&nbsp;
                  </p>
                </li>
              </ul>
              <p>
                La tecnología forma parte de mi vida no sólo en el ámbito
                laboral, sino que también la aplico para tener una continua
                formación y actualización para proyectos personales o por
                petición externa.
              </p>
            </div>
            <hr className="separador-about" />
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">04. Habilidades/Conocimientos generales</h3>
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
                <div className="item-mask2">
                  <img src="/images/postman.png" alt="node" />
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
            <h3 id="skills">05. Habilidades/Frameworks y Librerías</h3>
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
