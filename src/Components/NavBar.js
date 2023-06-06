import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Reports from '../pages/Reports/Reports';
import History from '../pages/History/History';
import Logo from '../pages/assets/selettra-Logo (2).png';
import Selettra from './Selettra';
import { Mapping } from '../pages/Mapping/Mapping';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('');

    return (
        <Router>
            <div id="nav-top">
                <div id="icons">
                    {/* Botão com ícone "home" */}
                    <Link to="/">
                        <button
                            id='home'
                            style={{ width: '50px', minWidth: '20px' }}
                            className={`navBarHover iconhome ${activeTab === '/' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setActiveTab('/')}
                        >
                            <i className="bi bi-house" title="Página inicial"></i>
                        </button>
                    </Link>
                    {/* Botão com ícone de perigo/exclamação */}
                    <Link to="/Reports">
                        <button
                            style={{ width: '50px', minWidth: '50px' }}
                            className={`navBarHover icondanger ${activeTab === '/Reports' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setActiveTab('/Reports')}
                        >
                            <i className="bi bi-exclamation-triangle" title="Avisos"></i>
                        </button>
                    </Link>

                    {/* Botão com ícone de status/clipboard */}
                    <Link to="/History">
                        <button
                            style={{ width: '50px', minWidth: '50px' }}
                            className={`navBarHover iconstatus ${activeTab === '/History' ? 'active' : ''}`}
                            type="button"
                            onClick={() => setActiveTab('/History')}
                        >
                            <i className="bi bi-clipboard2-data" title="DashBoards"></i>
                        </button>
                    </Link>

                    {/* Botão com ícone de bússola */}
                    <Link to="/Mapping">
                        <button
                            style={{ width: '50px', minWidth: '50px' }}
                            className={`navBarHover iconmapping ${activeTab === '/Mapping' ? 'active' : ''}`}
                            onClick={() => setActiveTab('/Mapping')}
                            type="button"
                        >
                            <i className="bi bi-compass" title="Localização"></i>
                        </button>
                    </Link>

                    {/* Botão com ícone de mapa */}
                    <button
                        style={{ width: '50px', minWidth: '50px' }}
                        className="navBarHover iconmaps"
                        type="button"
                    >
                        <i className="bi bi-map" title="Mapeamentos"></i>
                    </button>
                    <Link to='/Selettra' target="_blank">
                        <img className="selettra" src={Logo} alt="Logo"></img>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Reports' element={<Reports />} />
                <Route path='/History' element={<History />} />
                <Route path='/Selettra' element={<Selettra />} />
                <Route path='/Mapping' element={<Mapping />} />
            </Routes>
        </Router>
    );
};

export default NavBar;
