
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Reports from '../pages/Reports/Reports';



const NavBar = () => {
    return (
        <>
            <Router>
                <div id="nav-top">
                    <div id="icons">
                        {/* Botão com ícone "home" */}
                        <Link to="/">
                            <button className="navBarHover iconhome" type="button">
                                <i className="bi bi-house" title="Página inicial" ></i>
                            </button>
                        </Link>
                        {/* Botão com ícone de perigo/exclamação */}
                        <Link to="/Reports">
                            <button className="navBarHover icondanger" type="button">
                                <i className="bi bi-exclamation-triangle" title="Avisos" ></i>
                            </button>
                        </Link>

                        {/* Botão com ícone de status/clipboard */}
                        <button className="navBarHover iconstatus" type="button">
                            <i className="bi bi-clipboard2-data" title="DashBoards" ></i>
                        </button>

                        {/* Botão com ícone de bússola */}
                        <button className="navBarHover iconmapping" type="button">
                            <i className="bi bi-compass" title="Localização" ></i>
                        </button>

                        {/* Botão com ícone de mapa */}
                        <button className="navBarHover iconmaps" type="button">
                            <i className="bi bi-map" title="Mapeamentos" ></i>
                        </button>

                    </div>
                </div>
                    <Routes>
                        <Route exact path='/'
                            element={<Home />} >
                        </Route>
                            <Route exact path='/Reports'
                            element={<Reports />}>
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
