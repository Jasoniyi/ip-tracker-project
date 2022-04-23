import React, { useEffect, useState, useRef } from 'react'
import L from 'leaflet';



const Map = ({ data }) => {

  const mapContainer = useRef();
    const [map, setMap] = useState({});

    useEffect(()=>{
        // const map = L.map(mapContainer.current, {attributionControl: false}).setView([51.505, -0.09], 13);
        const map = L.map(mapContainer.current, {attributionControl: false}).setView([`${data.location.lat}`, `${data.location.lng}`], 13);
        // let marker = L.marker([`${data.location.lat}`, `${data.location.lng}`]

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamFzb25peWkiLCJhIjoiY2wyOHptbXh6MGI5eTNodHAxaXpxc2g1OSJ9.5ZHFS_ocfFzOGonshdKmPg', {
        maxZoom: 18,
        attribution: 'Map',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // marker: L.marker([51.5, -0.09]).addTo(map)
        marker: L.marker([`${data.location.lat}`, `${data.location.lng}`]).addTo(map)
        // marker: L.marker([`${data.location.lat}`, `${data.location.lng}`]
    }).addTo(map);

    // unmount map function
    return () => map.remove();
    }, []);

  return (
    
    <div 
    className="map-test" 
    ref={el => mapContainer.current = el}>
      
    </div>
  )
}

export default Map