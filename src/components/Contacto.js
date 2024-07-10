import React, { useState, useEffect  } from "react";
import emailjs from "emailjs-com";
import { VentanaModal } from "./VentanaModal";
import { Link } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import { Constantes } from "../helpers/Constantes";
/*Para instalar emiljs, añadir el comando: npm i emailjs-com*/

export const Contacto = () => {

  const [habilitado1, setHabilitado1] = useState(false);
  const [habilitado2, setHabilitado2] = useState(false);
  const [habilitado3, setHabilitado3] = useState(false);
  const [respuestaOk, setRespuestaOk] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [errorSend, setErrorSend] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 525);

  //useEffect sólo para el recaptcha
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 525);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeNombre = (e)=>{
    let dato = e.target.value;
    if(dato !== ""){
      setHabilitado1(true);
    }else{
      setHabilitado1(false);
    }
  }

  const changeEmail = (e)=>{
    var validEmail =  /^[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z]{2,5})+$/;
    let dato = e.target.value;

    if(dato !== ""){
      setHabilitado2(true);
    }else{
      document.getElementById("email").style.border = "";
      setHabilitado2(false);
    }

    //Lógica para validar el email y habilitar el botón de enviar
    if(validEmail.test(dato)){
      //El input tiene contenido y la validación es correcta. Se habilita el botón de enviar.
      document.getElementById("email").style.border = "2px solid green";
      setEmailError(false);
    }else if(dato === ""){
      //El input está vacío. NO se habilita el botón de enviar.
      setEmailError(false);
      document.getElementById("email").style.border = "";
    }else if(!validEmail.test(dato)){
      //El input tiene contenido y la validación NO es correcta. NO se habilita el botón de enviar.
      setEmailError(true);
      document.getElementById("email").style.border = "2px solid red";
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
    var validEmail =  /^[a-z0-9-_.]+@[a-z0-9-_.]+(\.[a-z]{2,5})+$/;
    var emailInput = document.getElementById("email");

    if(validEmail.test(emailInput.value) && habilitado1 && habilitado2 && habilitado3){
      
      setLoading(true);
      e.preventDefault();
      emailjs.sendForm("service_iqfypcl","template_eal2v49",e.target,"IYjDekAWB3TKy5jQG").then((res) => {
        console.log("RESPUESTA:" + res);
        if(res.status === 200){
          console.log("RESPUESTA:" + res.status);
          setRespuestaOk(true);
          setLoading(false);
          document.getElementById("formulario").reset();
          setHabilitado1(false);
          setHabilitado2(false);
          setHabilitado3(false);
          setCaptchaValue(null)
          document.getElementById("email").style.border = "";

        }else{
          console.log("RESPUESTA:" + res.status);
          setErrorSend(true);
          setRespuestaOk(false);
          setLoading(false);
        }
      }, function(error){
        console.log("RESPUESTA:" + error.status);
          setErrorSend(true);
          setRespuestaOk(false);
          setLoading(false);
      });  

    }else{
      console.log("Tienes que rellenar el formulario correctamente.")
      e.preventDefault();
    }
  }
    
    //si no cerramos el modal, tenemos 10" para que se cierre solo
    if(respuestaOk){
      setTimeout(() => {
          setRespuestaOk(false);
          window.location.reload();
      }, "15000");
    }
    //función para cerrar el modal poniendo la respuesta a false
    const closeModal = () => {
      setRespuestaOk(false)
      window.location.reload();
    }

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
            <a className="correo-personal" href="mailto:roldanordonez.francisco@gmail.com">roldanordonez.francisco@gmail.com </a>
              <div className="correo-personal1">
                <span className="material-symbols-outlined">mail</span>
              </div>
          </p>
          <div className="div-linkedin">
          <Link className="icon" to="https://www.linkedin.com/in/francisco-jos%C3%A9-rold%C3%A1n-ord%C3%B3%C3%B1ez-6a726112b/" target="_blank" title='LinkedIn'>
            LinkedIn <i className="fab fa-linkedin fa-lg mt-1 fa-2x"><span className="sr-only"></span></i>
          </Link>
          </div>

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
            {emailError ? (
              <span className="errorEmail">Introduce un email válido</span>
            )
            : ""
            }
            {errorSend ? (
              <span className="errorSend">Error al enviar el mensaje. Inténtelo de nuevo o más tarde. Disculpe las molestias.</span>
            )
            : ""
            }
            <input onChange={(e) => changeNombre(e)} type="text" className={habilitado1 ? "nombre2 entry" : "nombre entry" } placeholder="Nombre completo" name="nombre"/>
            <input id="email" onChange={(e) => changeEmail(e)} type="text" className={habilitado2 ? "email2 entry" : "email entry" } placeholder="Email" name="email"/>
            <textarea onChange={(e) => changeMensaje(e)} className={habilitado3 ? "message2 entry" : "message entry" } placeholder="¿Por qué quieres contactar conmigo?" name="mensaje"/> 
            <span><input type="submit" className={habilitado1 && habilitado2 && habilitado3 && !emailError && captchaValue ? "submit-999" : "submit-disabled"} value="Enviar"/></span>
            <div className="recaptcha">
            <ReCAPTCHA
            sitekey={Constantes.key_recaptcha_pro} size={isMobile ? "compact" : ""}
            onChange={(action) => setCaptchaValue(action)}/>
            </div>
          </form>
        </div>
      </div>
      <div className="magic"></div>
  </section>
  </>
  );
};
