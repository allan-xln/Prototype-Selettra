import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Reports from '../pages/Reports/Reports';
import History from '../pages/History/History'
import Logo from '../pages/assets/selettra-Logo (2).png'
import Selettra from './Selettra';



const NavBar = () => {

    

    return (
        <>
            <Router>
                <div id="nav-top">
                    <div id="icons">
                        
                        {/* Botão com ícone "home" */}
                        <Link to="/">
                            <button id='home' style={{width: '50px', minWidth: '20px'}} className="navBarHover iconhome" type="button">
                                <i className="bi bi-house" title="Página inicial" ></i>
                            </button>
                        </Link>
                        {/* Botão com ícone de perigo/exclamação */}
                        <Link to="/Reports">
                            <button  style={{width: '50px', minWidth: '50px'}} className="navBarHover icondanger" type="button">
                                <i className="bi bi-exclamation-triangle" title="Avisos" ></i>
                            </button>
                        </Link>

                        {/* Botão com ícone de status/clipboard */}
                        <Link to="/History">
                            <button style={{width: '50px', minWidth: '50px'}} className="navBarHover iconstatus" type="button">
                                <i className="bi bi-clipboard2-data" title="DashBoards" ></i>
                            </button>
                        </Link>
                    
                        {/* Botão com ícone de bússola */}
                        <button  style={{width: '50px', minWidth: '50px'}}className="navBarHover iconmapping" type="button">
                            <i className="bi bi-compass" title="Localização" ></i>
                        </button>

                        {/* Botão com ícone de mapa */}
                        <button style={{width: '50px', minWidth: '50px'}} className="navBarHover iconmaps" type="button">
                            <i className="bi bi-map" title="Mapeamentos" ></i>
                        </button>
                        <Link to='/Selettra' target="_blank">
                            <img class="selettra" 
                                    
                                    src={Logo} alt="Logo"></img>
                        </Link>
                            
                    </div>
                </div>
                    <Routes>
                        <Route exact path='/'
                            element={<Home />} >
                        </Route>
                        <Route exact path='/Reports'
                            element={<Reports />}>
                        </Route>
                        <Route exact path='/History'
                                element={<History />}>
                        </Route>
                        <Route exact path='/Selettra'
                            element={<Selettra />}>
                            </Route>
                        </Routes>
            </Router>

            {/* Área principal do conteúdo */}
            <div id="wrapper">
                <div className="overlay"></div>
            </div>
        </>
    );
    
};


export default NavBar;
