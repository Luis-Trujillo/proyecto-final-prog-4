//Se importa libreria de react 
import React from 'react';
//Importacion de boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//importacion de imagenes
import Foto from './Luis-Trujillo.jpeg';


//Se genera componente 
function navbar (){
    return(
        <div>
            <Navbar className='App__header-navbar'>
                <Container>
                    <img className='header__container-foto-perfil' src={Foto} alt='foto-perfil'/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="basic-navbar-nav">
                        <Nav className=" header__container-links">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
        </div>
        
        
    );

};
export default navbar;