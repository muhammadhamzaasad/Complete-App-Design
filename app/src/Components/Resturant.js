import React from 'react'

export default function Resturant() {
  return (
    <>
    <div className='container5'>
        <div className='header'>
          <i class="fa-solid fa-circle-chevron-left"></i>
          <h1>Resturant Detail</h1>
        </div>

        <div className='paragraph'>
          <p>Please sign up to get started</p>
        </div>

        <div className='box'>
          <h3>RESTURANT NAME</h3>
          <input type="text" name="" id="" placeholder='Muhammad Hamza' />
          <h3>ADDRESS</h3>
          <input type="email" name="" id="" placeholder='For Example ST for Street' />
          <h3>ZIP CODE</h3>
          <input type="email" name="" id="" placeholder='123456' />
          <h4>CONTACT PERSON NAME</h4>
          <input type="password" name="" id="" placeholder='Muhammad Hamza' />
          <h4>CONTACT NUMBER</h4>
          <input type="password" name="" id="" placeholder='+92 320-6785378' />

          <button>SIGN UP</button>
        </div>
    </div>
    <hr />
    </>
  )
}
