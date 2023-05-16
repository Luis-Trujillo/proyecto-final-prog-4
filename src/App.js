//====================SE IMPORTAN LIBRERIAS============
//Libreria de react
import React from 'react';
//===================SE IMPORTAN STILOS================
//Estilos de la pagina principal
import './App.css';
//Estilos de componentes
import '../src/components/footer/styles/Footer.css';
import './components/header/styles/Header.css';
import './components/main/styles/main.css';
import './components/main/helpers/componentsChildren/leftSide/stykes/leftSide.css';
import './components/main/helpers/componentsChildren/rightSide/styles/RightSide.css';

//estrilos de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//===========SE IMPORTAN COMPONENTES "PADRES"=============
import Header from './components/header/index';
import Navbar from './components/header/navbar/index';
import Footer from './components/footer/index';
import Main from './components/main/index';

//importacion de imagen 


function App() {
  return (
    <div className="App">
      <div className="App__header">
        <Header>
          <Navbar className="App__header-navbar"/>
        </Header>  
      </div>
      <Main/>
      <div className="App__footer">
        <Footer />  
      </div>
      
    </div>
  );
}

export default App;
