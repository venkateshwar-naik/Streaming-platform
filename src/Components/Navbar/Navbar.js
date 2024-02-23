import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
<div className="navlogo">

<img src={require("../../Assests/netflix.png") } alt="" />

</div>

<div className="login">
    <button>
    <Link to={'/login'}>SignIn</Link>
    </button>
    
</div>





    </nav>

  )
}

export default Navbar