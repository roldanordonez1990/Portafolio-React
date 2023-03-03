import React from "react";
import { proyectos } from "./datos/datos-proyectos";
import { Link } from "react-router-dom";

export const ListadoProyectos = ({limite}) => {
  return (
    <>
      <section className="box-items">
        {/*Con slice podemos limitar posiciones del array*/}
        {proyectos.slice(0, limite).map((proyecto) => {
          return (
            <article key={proyecto.id} className="items">
              <div className="item-mask">
                <img src={"/images/" + proyecto.imagen + ".png"} alt="" />
              </div>
              <Link to={"/proyectos/" + proyecto.id}>
                <h3>{proyecto.nombre}</h3>
              </Link>
              <span className="texto-tecnologias">{proyecto.tecnologias}</span>
            </article>
          );
        })}
      </section>
    </>
  );
};
