import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { About } from '../components/About';
import { Portafolio } from '../components/Portafolio';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Servicios } from '../components/Servicios';
import { ScrollTop } from '../components/ScrollTop';

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
    {/*Con este componente conseguimos que al cambiar de página no haya scroll*/}
    <ScrollTop/>
        {/*CABECERA Y NAVEGACIÓN*/}
        <HeaderNav/>
        {/*Contendo*/}
        <Routes>
            <Route path="/" element={<Navigate to="/inicio"/>} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/about" element={<About />}/>
            <Route path="/servicios" element={<Servicios/>}/>
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/contacto" element={<Contacto />} />
              <Route path="/proyectos/*">
                <Route path="elgranizo"/>
                <Route path="firsttrain"/>
                <Route path="portafolioweb" element={<Navigate to="/inicio"/>}/>
              </Route>
        </Routes>
        {/*Footer*/}
        <Footer/>
    </BrowserRouter>
  )
}
