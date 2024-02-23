import './App.css';
import Home from './Components/Home/Home';
import Faqs from './Components/Pages/Faqs/Faqs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Pages/Login/Login ';


function App() {
  return (
   
<>


<div className="App">
      
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path="/faqs" element={<Faqs/>} />
        </Routes>
</BrowserRouter>
      
    </div>

</>
   



  );
}

export default App;
