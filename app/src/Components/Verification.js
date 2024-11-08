import React from 'react'
import bu from './images/bu.png'

export default function Verification() {
  return (
    <>
    <div className='container3'>
        <div className='header'>
          <i class="fa-solid fa-circle-chevron-left"></i>
          <h1>Verification</h1>
        </div>

        <div className='paragraph'>
          <p>We have sent a code to your email <br /> example@gmail.com</p>
        </div>



        <div className='box'>
          <h3>CODE  <a href="/">Resend</a></h3>
          <tr>
            <th>2</th>
            <th>0</th>
            <th>1</th>
            <th>5</th>
          </tr>

          <button>VERIFY</button>
          <img src={bu} alt="" />
        </div>
    </div>
    <hr />
    </>
  )
}
