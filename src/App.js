import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import IpDisplay from './components/IpDisplay';
import Map from './components/Map'
import axios from 'axios'


const App = () => {
  const [data, setData] = useState({});
  const [lat, setLat ] = useState('');
  const [lng, setLng ] = useState('');

  const DEFAULT_URL = 'https://geo.ipify.org/api/v2/country,city'
  const MY_APIKEY = 'at_LrnFuYIMEWnCWRTQI5g8MzyfLNAL9'

  const getIpAddress = (address) => {
    console.log('passed params',address)
    const getData = async () => {
      try {
        const data = await axios.get(`${DEFAULT_URL}?apiKey=${MY_APIKEY}&ipAddress=${address}`)
        const result = data.data
        // console.log('res2', result)
        // console.log('lat', result)
        // console.log('latCheck', lat) 
        setData(result)
        setLat(result.location.lat)
        setLng(result.location.lng)
      } catch (err) {
        return err.message
      }
    }
    getData()
  }

  useEffect(() => {
    const getIpDetails = async () => {
      try {
        const data = await axios.get(`${DEFAULT_URL}?apiKey=${MY_APIKEY}`)
        const result = data.data
        setData(result)
        setLat(result.location.lat)
        setLng(result.location.lng)
        console.log('useEff', result.location.lat) 
        // console.log('latCheck', lat) 
        // console.log('lngCheck', lng) 
      } catch (err) {
        return err.message
      }
    }
    getIpDetails()
  }, [])

  return (
    <div>
      <Header getAddress={getIpAddress} />
      <div className="relative">
        <IpDisplay data={data} />
        <Map lng={lng} lat={lat} />
      </div>
    </div>
  );
}

export default App;
