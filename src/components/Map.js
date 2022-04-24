import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet';



const Map = ({ lat, lng }) => {
  
  const getLat = lat ? `${lat}` : ''
  const getLng = lng ? `${lng}` : ''

  const mapContainer = useRef();
    // const [map, setMap] = useState({});

    

    
    useEffect(()=>{
     
        const map = L.map(mapContainer.current, {attributionControl: false}).setView([`${getLat}`, `${getLng}`], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFzb25peWkiLCJhIjoiY2wyOHptbXh6MGI5eTNodHAxaXpxc2g1OSJ9.5ZHFS_ocfFzOGonshdKmPg', {
        maxZoom: 18,
        attribution: 'Map',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        marker: L.marker([`${getLat}`, `${getLng}`]).addTo(map)
    }).addTo(map);
     console.log('lat',getLat )
     
    // unmount map function
    return () => map.remove();
    }, [getLat]);

  return (
    
    <div 
    className="map-test" 
    ref={el => mapContainer.current = el}>
      
    </div>
  )
}

export default Map