import React from 'react'
import "./Show.css"

const Show = () => {
  return (
    <div className='show'>
        <div className="show1">

            <img src={require("../../../Assests/mobile-0819.jpg")} alt="" />
        </div>
        <div className="show2">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>



    </div>
  )
}

export default Show