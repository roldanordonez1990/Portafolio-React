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
            <div className="cvAnimation">
              <a
                href="../docs/CV_Francisco_Roldan.pdf"
                className="anchorAnimation"
                download
              >
                <span>¡Aquí puedes descargar mi CV!</span>
              </a>
            </div>
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="experiencia">01. Experiencia en el sector IT</h3>

            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading">
                      &#x1F4BB; Lleego Travel Market
                    </p>
                    <div className="success-prompt-prompt">
                      <p>
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
                        <span className="titulacion">Postman en</span>
                        <span className="titulacion"> JavaScript</span>.
                      </p>
                    </div>
                    <div className="success-button-container">
                      <button className="success-button-main" type="button">
                        2025-Actualidad &#128267;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading">&#x1F4BB; NTT DATA</p>
                    <div className="success-prompt-prompt">
                      <p>
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
                        &nbsp;Garantizar la calidad del software en la
                        aplicación web y móvil combinando pruebas funcionales y
                        automatizadas con{" "}
                        <span className="titulacion">
                          Selenium WebDriver y Appium
                        </span>{" "}
                        en <span className="titulacion">Java</span>.
                      </p>
                    </div>
                    <div className="success-button-container">
                      <button className="success-button-main" type="button">
                        2022-2025 &#x1FAAB;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading">
                      &#x1F4BB; Hostgreen
                    </p>
                    <div className="success-prompt-prompt">
                      <p>
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
                        &nbsp;Desarrollo y mantenimiento de su página web, base
                        de datos y CRM con
                        <span className="titulacion">
                          {" "}
                          PHP, JavaScript, SQL, HTML y CSS
                        </span>
                        .
                      </p>
                    </div>
                    <div className="success-button-container">
                      <button className="success-button-main" type="button">
                        2021-2022 &#x1FAAB;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-box">
          <div className="f2">
            <h3 id="formacion">02. Formación</h3>
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading2">
                      {" "}
                      &#127891; CFGS Desarrollo de Aplicaciones Web (DAW) -
                      <span className="success-prompt-prompt2 titulacion">
                      &nbsp;IES Marqués de Comares (Lucena, Córdoba) &#128205;
                      </span>
                    </p>
                    <div className="success-button-container">
                      <button className="success-button-main" type="button">
                        2019-2021
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading2">
                      {" "}
                      &#127891; Máster Desarrollo Territorial Sostenible -
                      <span className="success-prompt-prompt2 titulacion">
                        &nbsp;Universidad Autónoma de Madrid &#128205;
                      </span>
                    </p>
                    <div className="success-button-container">
                      <button className="success-button-main">2014-2015</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="notifications-container">
              <div className="success">
                <div className="flex">
                  <div className="success-prompt-wrap">
                    <p className="success-prompt-heading2">
                      {" "}
                      &#127891; Licenciatura en Geografía -
                      <span className="success-prompt-prompt2 titulacion">
                        &nbsp;Universidad de Málaga &#128205;
                      </span>
                    </p>
                    <div className="success-button-container">
                      <button className="success-button-main" type="button">
                        2008-2013
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">03. Habilidades/Conocimientos generales</h3>
            <section className="experiencia-container">
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/html.png" alt="html" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/css.png" alt="css" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/js.png" alt="js" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/node1.png" alt="node" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/postman.png" alt="node" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/java.png" alt="java" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/php1.png" alt="php" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img
                    src="/images/selenium1.png"
                    alt="selenium"
                    className="midu"
                  />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/appium.png" alt="appium" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/sql.png" alt="sql" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img
                    src="/images/mongodb1.png"
                    alt="mongo"
                    className="midu"
                  />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/git.png" alt="git" className="midu" />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="about-box2">
          <div className="f2">
            <h3 id="skills">04. Habilidades/Frameworks y Librerías</h3>
            <section className="experiencia-container">
              <div className="exp-box">
                <div className="item-mask2">
                  <img src="/images/react1.png" alt="react" className="midu" />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img
                    src="/images/angular1.png"
                    alt="angular"
                    className="midu"
                  />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img
                    src="/images/spring.png"
                    alt="spring "
                    className="midu"
                  />
                </div>
              </div>
              <div className="exp-box">
                <div className="item-mask2">
                  <img
                    src="/images/laravel1.png"
                    alt="spring "
                    className="midu"
                  />
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
