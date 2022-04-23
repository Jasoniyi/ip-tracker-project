import React, { useState } from 'react';
import IconArrow from '../images/icon-arrow.svg'

const Header = ({ getAddress }) => {
  const [ipAddress, setIpAddress ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(ipAddress)
    setIpAddress(ipAddress)
    getAddress(ipAddress)
    setIpAddress('');
  }


  return (
    <div className='header-wrapper'>
        <div className='flex justify-center pt-16'>
            <form className='form-wrapper flex' onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Search for any IP address or domain'
                className="md:w-96 w-60 text-base"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                />
                <button className='flex justify-center items-center'>
                    <img src={IconArrow} alt='icon-arrow' />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Header