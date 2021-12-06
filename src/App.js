import React from 'react';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import './styles/global.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Card />
      <Footer />
    </React.Fragment>
  );
}

export default App;
