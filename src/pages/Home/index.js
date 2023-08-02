import React from 'react'
import logo from '../../logo.svg'
import './style.css'

function Home() {
  console.log('Home Page')

  return (
    <div className='homeContainer'>
      <p>
        Doris's Pressure Washin'
      </p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

export default Home;