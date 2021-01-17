import React, {PureComponent} from 'react';
import {useState, useEffect, useRef, useMemo} from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';

import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

//把图标重新引入
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.imagePath = '';
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: '',
});

export default class LeafletMarker extends PureComponent {

  componentDidMount(){
     const {dispatch} = this.props;
  }
  
  render() {

    const position = [51.505, -0.09]; //中心点
    const mapURL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    return (
      <MapContainer center={position} 
        // minZoom={10}
        // maxZoom={10}
        zoom={10} 
        // doubleClickZoom={false} 
        // dragging={false} 
        // scrollWheelZoom={false}
        // boxZoom={false} 
        // touchZoom={false}
        style={{ width: '1000px', height: '700px' }}>
        <TileLayer url={mapURL} />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}