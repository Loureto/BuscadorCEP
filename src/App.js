import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { BuscaCep } from './components/pages/BuscaCep';
import { BuscaEndereco } from './components/pages/BuscaEndereco';
import { Home } from './components/pages/Home';
import './styles/global.scss';

export const App = () =>{
  return (
    <React.Fragment>      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="BuscaEndereco" element={<BuscaEndereco/>}/>
          <Route path="BuscaCep" element={<BuscaCep />}/>
        </Routes>
        <Footer />
      </BrowserRouter>      
    </React.Fragment>
  );
}
