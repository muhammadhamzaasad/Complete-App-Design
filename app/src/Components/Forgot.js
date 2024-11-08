import React from 'react'
import download from './images/download.png'

export default function Forgot() {
  return (
    <>
    <div className='container2'>
        <div className='header'>
          <i class="fa-solid fa-circle-chevron-left"></i>
          <h1>Forgot Password</h1>
        </div>

        <div className='paragraph'>
          <p>Please sign in to your existing account</p>
        </div>



        <div className='box'>
          <h3>EMAIL</h3>
          <input type="email" name="" id="" placeholder='example@gmail.com' />

          <button>SEND CODE</button>
          <img src={download} alt="" />
        </div>
    </div>
    <hr />
    </>
  )
}
