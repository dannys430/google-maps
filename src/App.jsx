import React, {useState, useEffect, useRef} from 'react'
import mapboxgl from "mapbox-gl";
import {mapbox} from "./keys";


export const App = () => {
  const [getCoords, setCoords] = useState([-0.11, 51.5])
  
  
  const node = useRef(null);
  
  useEffect(() => {
    mapboxgl.accessToken = mapbox.token;

    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
    const map = new mapboxgl.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: getCoords,
      zoom: 5
    }) 
  }, [map])
  
  
  const successLocation = (position) => {
    // console.log(position)
    setCoords([position.coords.longitude, position.coords.latitude])
  }
  
  const errorLocation = () => {}
  

  return(
    <div>
      <div ref={node} className="mapContainer"></div>
    </div>
  )



}
