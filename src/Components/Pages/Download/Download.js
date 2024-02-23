import React from 'react'
import "./Download.css"
// import video from "../../../Assests/"

const Download = () => {
  return (
    <div className='down'>
        <div className="down1">
            <h1>Enjoy on your Tv</h1>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>
        <div className="down2">

        <img src={require("../../../Assests/32714-6-apple-computer.png") } alt="" />
        {/* <video src={video} autoPlay loop muted></video> */}
        </div>




    </div>
  )
}

export default Download