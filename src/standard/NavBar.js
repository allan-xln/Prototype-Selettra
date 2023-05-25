import React from 'react';

const NavBar = () => {
    return (
        <>
            {/* Barra de navegação superior */}
            <div id="nav-top">
                <div id="icons">
                    {/* Botão com ícone "home" */}
                    <button className="navBarHover iconhome" type="button">
                        <i className="bi bi-house" title="Página inicial"></i>
                    </button>

                    {/* Botão com ícone de perigo/exclamação */}
                    <button className="navBarHover icondanger" type="button">
                        <i className="bi bi-exclamation-triangle" title="Avisos"></i>
                    </button>

                    {/* Botão com ícone de status/clipboard */}
                    <button className="navBarHover iconstatus" type="button">
                        <i className="bi bi-clipboard2-data" title="DashBoards"></i>
                    </button>

                    {/* Botão com ícone de bússola */}
                    <button className="navBarHover iconmapping" type="button">
                        <i className="bi bi-compass" title="Localização"></i>
                    </button>

                    {/* Botão com ícone de mapa */}
                    <button className="navBarHover iconmaps" type="button">
                        <i className="bi bi-map" title="Mapeamentos"></i>
                    </button>
                </div>
            </div>

            

            {/* Área principal do conteúdo */}
            <div id="wrapper">
                <div className="overlay"></div>
            </div>
        </>
    );
};

export default NavBar;
