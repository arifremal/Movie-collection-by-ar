import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home'
import Sidecart from './Components/SideCart/Sidecart'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'

function App() {
  const handleWatchTime= (time)=>{
    console.log(time);
  }

  return (
    <div className="App">
      
     {/* <Home></Home>
     <Sidecart></Sidecart> */}
     <div className='header m-auto mb-2' >
      <Header></Header>


     </div>
     <div className='main row'>
      <div className="home-container col-md-8 ">
        <Home handleWatchTime={handleWatchTime} ></Home>
      </div>
      <div className="side-cart col-md-4 card ">
        <Sidecart></Sidecart>
      </div>
      <Contact></Contact>

     </div>
      
    </div>
  )
}

export default App
