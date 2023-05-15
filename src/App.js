//====================SE IMPORTAN LIBRERIAS============
//Libreria de react
import React from 'react';
//===================SE IMPORTAN STILOS================
//Estilos de la pagina principal
import './App.css';
import '../src/components/footer/styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//===========SE IMPORTAN COMPONENTES "PADRES"=============
import Header from './components/header/index';
import Navbar from './components/header/helpers/navbar/index';
import Footer from './components/footer/index';


function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Navbar className="App__footer"/>
      </Header>
      <Footer/>
    </div>
  );
}

export default App;
