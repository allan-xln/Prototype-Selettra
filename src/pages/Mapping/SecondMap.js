import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function SecondMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  
  return (
    <div id="map" className='card-body pt-4 ps-4 pe-4 pb-4 justify-content-bottom'
        style={{
          display: 'flexbox',
          boxShadow: '2px 6px 10px rgb(92, 92, 92)',
          overflow: 'hidden', borderRadius: '20px',
          float: 'right',
          height: '87vh',
          width: '145vh',
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
  );
}