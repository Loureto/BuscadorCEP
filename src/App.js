import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BuscaCep } from './pages/BuscaCep';
import { BuscaEndereco } from './pages/BuscaEndereco';

import { Home } from './pages/Home';
import { NaoEncontrada } from './pages/NaoEncontrada';
import { Resultado } from './pages/Resultado';

import './styles/global.scss';

export const App = () =>{
  return (
    <React.Fragment>      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />              
          <Route path="BuscaEndereco" element={<BuscaEndereco />}/>
          <Route path="Resultado" element={<Resultado />}/>                    
          <Route path="BuscaCep" element={<BuscaCep/>}/>          
          <Route path="*" element={<NaoEncontrada/>} />
        </Routes>
        <Footer />
      </BrowserRouter>      
    </React.Fragment>
  );
}
