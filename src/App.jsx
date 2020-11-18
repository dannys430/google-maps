import React from 'react';
import mapboxgl from "mapbox-gl";
import {mapbox} from "./keys";

mapboxgl.accessToken = mapbox.token;

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    }
  }
  
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })
    return map
  }
  
  render() {

    return (
      <div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    )
  }


}


export default App;
