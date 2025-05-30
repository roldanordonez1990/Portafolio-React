import React from "react";
//import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export const Contacto = () => {

  return (
  <>
  <section className="contenido-contacto">
      {/*V1 TEXTO, LOADERS Y VENTANA*/}
      <div className="v">
        <div className="v1">
          <p className="titulo-contacto"><strong>¡Gracias por contactar conmigo!</strong></p> 
          <p className="mensaje-contacto">El mensaje que me envíes desde el formulario, llegará a mi correo personal. 
          La dirección de correo que adjuntes, será con la cual desees mantener este hilo de conversación vía email.
          </p>
          <p>
            En cambio, si prefieres no usar este formulario, puedes enviarme un mensaje a:
          </p>
          <p className="p-correo">
            <span className="correo-personal">roldanordonez.francisco@gmail.com</span>
              <div className="correo-personal1">
                <span className="material-symbols-outlined">mail</span>
              </div>
          </p>
          <div className="div-linkedin">
          <Link className="icon" to="https://www.linkedin.com/in/francisco-jos%C3%A9-rold%C3%A1n-ord%C3%B3%C3%B1ez-6a726112b/" target="_blank" title='LinkedIn'>
            LinkedIn <i className="fab fa-linkedin fa-lg mt-1 fa-2x"><span className="sr-only"></span></i>
          </Link>
          </div>
        </div>
      </div>

      {/*V2 FORMULARIO*/}
      <div className="v">
        <div className="v2">
          <div className='box-error-img form'>
              <img src="/images/mantenimiento.png" alt=''/>
          </div>
          <p className="p-correo">
            <span className="p-correo errorEmail"><strong>En mantenimiento, disculpe las molestias</strong></span>
          </p>
        </div>
      </div>
      <div className="magic"></div>
  </section>
  </>
  );
};
