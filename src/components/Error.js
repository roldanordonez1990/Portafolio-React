import React from 'react';
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
    <div className='container-error'>
        <div className='box-error-img'>
            <img src="/images/sad.svg" alt=''/>
        </div>
        <h1>Error 404</h1>
        <h2>Página no encontrada</h2>
        <br/>
        <p className="pBtn">
            <Link to="/inicio">
                <span className="btn-special3">Volver al inicio</span>
            </Link> 
        </p>
        <div className='espaciador-error'></div>
    </div>
    </>
  )
}
