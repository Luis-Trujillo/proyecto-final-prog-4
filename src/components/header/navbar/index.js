//Se importa libreria de react 
import React from 'react';
//Importacion de boostrap
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//importacion de imagenes
import Foto from './Luis-Trujillo.jpeg';


//Se genera componente 
function navbar (){
    return(
        <div>
            <Navbar className='App__header-navbar'>
                <img className='header__container-foto-perfil' src={Foto} alt='foto-perfil'/>
                <Nav className='navbar__container-links'>
                    <a className='header__container-links--a' href="#home">Home</a>
                    <a className='header__container-links--a' href="#sobre-mi">Sobre mi</a>
                    <a className='header__container-links--a' href='#contacto'>Contacto</a>
                    <a className='header__container-links--a' href='#referencias-personales'>Referencias personales</a>
                    <a className='header__container-links--a' href='#experiencia-laboral'>Experiencia laboral</a>
                    <a className='header__container-links--a' href='#estudios'>Estudios</a>
                    <a className='header__container-links--a' href='#idiomas'>Idiomas</a>
                    <a className='header__container-links--a' href='#habilidades'>Habilidades</a>
                </Nav>     
            </Navbar>
        </div>   
    );

};
export default navbar;