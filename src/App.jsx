import React, {useState, useEffect, useRef} from 'react'
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
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

    // const marker = new mapboxgl.Marker()
    //   .setLngLat([-122.25948, 37.87221])
    //   .addTo(map)

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false,
      // placeholder: 'Search Here...',
      // bbox: [-150.30937, -100.84214, 150.23715, 100.89838],
      // proximity: {
      //   longitude: 13.706136,
      //   latitude: 100.600459
      // }
    })

    map.on('move', () => {
      console.log(map)
    })



    map.addControl(geocoder)
    
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

    return () => map.remove()
  }, [])
  
  const successLocation = (position) => {      
    setCoords([position.coords.longitude, position.coords.latitude])
    // map.center = getCoords
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
