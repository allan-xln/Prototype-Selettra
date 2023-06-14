import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function TabPanel() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  const [activeTab, setActiveTab] = useState('Tarefas');

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    setActiveTab(tabName);
  };
  
  return (
    <div className="card mt-1 me-2 justify-content-bottom" style={{ display: 'flexbox', border:"transparent", background: "transparent", float: 'right', borderRadius: '20px' }}>
      <div className="card-header" style={{ border: "transparent", background: "transparent" , borderRadius:'10px'}}>
        <ul className="nav nav-tabs card-header-tabs" role="tablist">
          <li className="nav-item" >
            <a style={{ borderRadius:""}}id='TaskTab' className={`nav-link active ${activeTab === 'Tarefas' ? 'active ActiveTab' : ''}`} href="#Tarefas" role="tab" aria-controls="Tarefas" aria-selected="true"
               onClick={(e) => handleTabClick(e, 'Tarefas')}>
              Tarefas
            </a>
          </li>
          <li className="nav-item">
            <a id='MapTab' className={`nav-link active ${activeTab === 'Mapa' ? 'active ActiveTab' : ''}`} href="#Mapa" role="tab" aria-controls="Mapa" aria-selected="false" onClick={(e) => handleTabClick(e, 'Mapa')}>
              Mapa
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content" style={{border:"transparent", borderRadius:"15px",background: "white"}}>
        <div className={`tab-pane ${activeTab === 'Tarefas' ? 'active' : ''}`} id="Tarefas" role="tabpanel">
        <div id='TaskTable' className='card-body mt-0 justify-content-bottom'
            style={{
            background: "white",
            display: 'absolute',
            minHeight: '38vh',
            height: '38vh',
            fontSize: "20px",
            marginTop: "2em",
            borderRadius: "20px",
            alignText: "center",
            alignContent: "center",
            boxShadow: '2px 6px 10px rgb(92, 92, 92)',
            }}>
            <table class="table table-responsive table-bordered table-hover mt-2 ms-1 mb-2">
            <thead class="table-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo</th>
                <th scope="col">Info</th>
                <th scope="col">Scan</th>
                <th scope="col">Velocidade</th>
                <th scope="col">Tempo</th>
                <th scope="col">Validar</th>
                </tr>
            </thead>
                <tbody style={{opacity: "100%", alignText:"center"}} className="table-light">
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
                <tr>
                <th scope="row">1</th>
                <td>P</td>
                <td>ponto_2</td>
                <td>1</td>
                <td>30</td>
                <td>0</td>
                <td>Não</td>
                </tr>
            </tbody>
            </table>
            <nav aria-label="Page navigation example" >
              <ul class="pagination" style={{float: "right"}}>
                <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Próxima</a></li>
              </ul>
            </nav>
        </div>
        </div>

        <div className={`tab-pane ${activeTab === 'Mapa' ? 'active' : ''}`} id="Mapa" role="tabpanel" aria-labelledby="Mapa-tab">
        <div id="map" className='card-body pt-4 ps-4 pe-4 pb-4 justify-content-bottom'
                style={{
                display: 'flexbox',
                boxShadow: '2px 6px 10px rgb(92, 92, 92)',
                overflow: 'hidden', borderRadius: '20px',
                float: 'right',
                height: '80vh',
                width: '139vh',
                background: "white",
                }}>
                
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={-25.424893386368087}
                lng={-49.276827554699246}
                text="My Marker"
                />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
}