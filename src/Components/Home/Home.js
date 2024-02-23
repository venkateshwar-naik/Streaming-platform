import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Download from '../Pages/Download/Download'
import Show from '../Pages/shows/Show'
import Sec4 from '../Pages/Section4/Sec4'
import Sec5 from '../Pages/Sec5/Sec5'
import Faqs from '../Pages/Faqs/Faqs'
import Sec3 from '../Pages/Sec3/Sec3'

const Home = () => {
  return (

    <div>

<Navbar/>
<Hero/>
<Download/>
<Sec3/>

<Show/>
<Sec4/>
<Sec5/>
<Faqs/>

    </div>
  )
}

export default Home