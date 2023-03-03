import React, { useState } from "react";
import emailjs from "emailjs-com";
import { VentanaModal } from "./VentanaModal";
import { Link } from "react-router-dom";
/*Para instalar emiljs, añadir el comando: npm i emailjs-com*/

export const Contacto = () => {

  const [habilitado1, setHabilitado1] = useState(false);
  const [habilitado2, setHabilitado2] = useState(false);
  const [habilitado3, setHabilitado3] = useState(false);
  const [respuestaOk, setRespuestaOk] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeNombre = (e)=>{
    let dato = e.target.value;
    if(dato !== ""){
      setHabilitado1(true);
    }else{
      setHabilitado1(false);
    }
  }

  const changeEmail = (e)=>{
    let dato = e.target.value;
    if(dato !== ""){
      setHabilitado2(true);
    }else{
      setHabilitado2(false);
    }
  }

  const changeMensaje = (e)=>{
    let dato = e.target.value;
    if(dato !== ""){
      setHabilitado3(true);
    }else{
      setHabilitado3(false);
    }
  }

  const enviarEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    
      emailjs.sendForm("service_iqfypcl","template_eal2v49",e.target,"VzTOeiexGwPMGP29Z").then((res) => {
        console.log(res);
        if(res.status === 200){
          setRespuestaOk(true);
          setLoading(false);
          document.getElementById("formulario").reset();
          setHabilitado1(false);
          setHabilitado2(false);
          setHabilitado3(false);
        }else{
          setRespuestaOk(false)
        }
      });  
    }

      //si no cerramos el modal, tenemos 10" para que se cierre solo
      if(respuestaOk){
        setTimeout(() => {
            setRespuestaOk(false);
        }, "15000");
      }
      //función para cerrar el modal poniendo la respuesta a false
      const closeModal = () => {
        setRespuestaOk(false)
      }
      
  return (
    <>
  <section className="contenido-contacto">
        {/*V1 TEXTO, LOADERS Y VENTANA*/}
      <div className="v">
        <div className="v1">
          <p className="titulo-contacto"><strong>¡Gracias por contactar conmigo!</strong></p> 
          <p className="mensaje-contacto">El mensaje que me envíes desde el formulario, llegará a mi correo personal. 
          La dirección de correo que adjuntes en el mismo, será con la cual desees mantener este hilo de conversación vía email.
          </p>
          <p>
            En cambio, si prefieres no usar este formulario, puedes enviarme un mensaje a:
          </p>
          <p className="correo-personal">
            roldanordonez.francisco@gmail.com
          </p>
          <Link className="icon" to="https://www.linkedin.com/in/francisco-jos%C3%A9-rold%C3%A1n-ord%C3%B3%C3%B1ez-6a726112b/" target="_blank" title='LinkedIn'>
            LinkedIn <i className="fab fa-linkedin fa-lg mt-1 fa-2x"><span class="sr-only"></span></i>
          </Link>

          {loading ? (
            <div className="wrapper-loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            </div>
            )
            : ""
          }
      {respuestaOk ? (
      <VentanaModal 
        title="¡Mensaje enviado correctamente! Te responderé lo antes posible a la dirección que has indicado." 
        handleClose={() => closeModal() }>
      </VentanaModal>
      )
      : ""
      }
        </div>
      </div>
        {/*V2 FORMULARIO*/}
      <div className="v">
        <div className="v2">
          <form id="formulario" className="form" onSubmit={enviarEmail}>
            <input onChange={(e) => changeNombre(e)} type="text" className={habilitado1 ? "nombre2 entry" : "nombre entry" } placeholder="Nombre completo" name="nombre"/>
            <input onChange={(e) => changeEmail(e)} type="text" className={habilitado2 ? "email2 entry" : "email entry" } placeholder="Email" name="email"/>
            <textarea onChange={(e) => changeMensaje(e)} className={habilitado3 ? "message2 entry" : "message entry" } placeholder="¿Por qué quieres contactar conmigo?" name="mensaje"></textarea>
            <span><input type="submit" className={habilitado1 && habilitado2 && habilitado3 ? "submit-999" : "submit-disabled"} value="Enviar"/></span>
          </form>
        </div>
      </div>
  </section>
    </>
  );
};
