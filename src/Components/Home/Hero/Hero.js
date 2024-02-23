import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (

    <div className='hero'>
    <h1> Unlimited Movies, Tv Shows And More </h1>
    <h2> Watch Anywhere and Cancel Anytime   </h2> 
    <h2>Ready to watch? Enter your mail to create your Membership</h2>
    <div className="strt">
    <input type="email" id='hero' placeholder='enter-mail'/>
    <button>GET STARTED  </button>

    </div>
    
    
    
    </div>
  )
}

export default Hero