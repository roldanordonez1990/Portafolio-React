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
import { Granizo } from '../components/proyectos/Granizo';
import { Moneyapp } from '../components/proyectos/Moneyapp';
import { Firsttrain } from '../components/proyectos/Firsttrain';
import { Noticiero } from '../components/proyectos/Noticiero';
import { Videojuego } from '../components/proyectos/Videojuego';

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
            <Route path="/elgranizo" element={<Granizo/>}/>
            <Route path="/moneyapp" element={<Moneyapp/>}/>
            <Route path="/firsttrain" element={<Firsttrain/>}/>
            <Route path="/noticiero" element={<Noticiero/>}/>
            <Route path="/videojuego" element={<Videojuego />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="*" element={<div>Error 404 Not Found</div>}/>
        </Routes>
        {/*Footer*/}
        <Footer/>
    </BrowserRouter>
  )
}
