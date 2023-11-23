import React from "react";
import { proyectos } from "./datos/datos-proyectos";
import { Link } from "react-router-dom";
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';


export const ListadoProyectos = ({limite}) => {

  const handleClickArrow = (e) => {
    const section = document.querySelector('#box-items');
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section id="box-items" className="box-items">
        {/*Con slice podemos limitar posiciones del array*/}
        {proyectos.slice(0, limite).map((proyecto) => {
          return (
            <article key={proyecto.id} className="items">
              <div className="item-mask">
                <img src={"/images/" + proyecto.imagen + ".png"} alt="" />
              </div>
              <Link to={"/" + proyecto.id}>
                <h3>{proyecto.nombre}</h3>
              </Link>
              <span className="texto-tecnologias">{proyecto.tecnologias}</span>
            </article>
          );
        })}
      </section>
      <div className="arrow">
        <Link to="#box-items" onClick={(e) =>handleClickArrow(e)}><i className='fas fa-arrow-circle-up'></i></Link>
      </div>
    </>
  );
};
