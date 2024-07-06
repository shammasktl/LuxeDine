import React from 'react'
import './AppDownload.css'
import { assets } from '../../assests/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>To enhance your experience <br /> LuxeDine</p>
      <div className="app-download-platforms">
        <img src={assets.play} alt="" />
        <img src={assets.apple} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
