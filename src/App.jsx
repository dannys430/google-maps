import React, {useState, useEffect, useRef} from 'react'
import mapboxgl from "mapbox-gl";
import {mapbox} from "./keys";

mapboxgl.accessToken = mapbox.token;

export const App = () => {
  const [getCoords, setCoords] = useState([-0.11, 51.5])
  
  
  const node = useRef(null);
  
  useEffect(() => {
    
    const map = new mapboxgl.Map({
      container: node.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: getCoords,
      zoom: 5
    }) 
    
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

    return () => map.remove()
  }, [])
  
  const successLocation = (position) => {      
    setCoords([position.coords.longitude, position.coords.latitude])
    map.center = getCoords
  }
  
  const errorLocation = () => {
    // error handling
  }
  
  
  
  
  
  return(
    <div>
      <div 
        ref={node} 
        className="mapContainer">
      </div>
    </div>
  )
  


}
