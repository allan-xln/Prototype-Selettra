import React from "react";
import { SecondMap } from "./SecondMap";
import { RecipeCard } from "../Home/RecipeCard";
import AGV_IMG from '../assets/AGV_IMG.png'

export function Mapping() {
    return (
        <>
        <div id="mapContainer" className="justify-content-center ms-5 mt-2 me-4" style={{ float:"left"}}>
            <SecondMap />
        </div>
            <div id='StatusCard' className="card p-4 mb-1" style={{ float: "left", width: "17%" }}>
                <p1 className="d-flex flex-row justify-content-center mb-2" style={{ fontSize:"18px", border: "none"}}>STATUS</p1>
                <img className="AGV_IMG justify-content-center mt-2 mb-2" src={AGV_IMG} ></img>
                <div id="StatusIndicator" className="d-flex flex-row justify-content-center mt-2 mb-4">
                    <div className="d-flex flex-column p-2">
                        <span>CONECTADO</span>
                    </div>
                </div>
                    <span>PART NUMBER: AGV-05-CC3</span>
                    <span>IP: 192.728.2.088</span>
                    <span>MODO: MANUAL</span>
                    <span>REDE: ONLINE</span>       
            </div>
            <div id='CardWrapper2' className="card p-4 justify-content-center mt-3" style={{ float: "left", width: "17%" }}>
                <p1 style={{ border: "none"}} className="d-flex flex-row justify-content-center mb-2">OPÇÕES</p1>
                <button id="MappingBtn" className="d-flex flex-row justify-content-center mt-2">
                    <div className="d-flex flex-column p-2">
                        <span>GRAVAR</span>
                    </div>
                </button>
                <button id="MappingBtn" className="d-flex flex-row justify-content-center mt-2">
                    <div className="d-flex flex-column p-2">
                        <span>EDITAR</span>
                    </div>
                </button>
                <button id="MappingBtn" className="d-flex flex-row justify-content-center mt-2">
                    <div className="d-flex flex-column p-2">
                        <span>DESCARTAR</span>
                    </div>
                </button>
            </div>
    </>
    )
}