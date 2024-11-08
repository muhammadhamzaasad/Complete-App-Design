import React from 'react'

export default function Signup() {
  return (
    <>
    <div className='container4'>
        <div className='header'>
          <i class="fa-solid fa-circle-chevron-left"></i>
          <h1>Sign Up</h1>
        </div>

        <div className='paragraph'>
          <p>Please sign up to get started</p>
        </div>

        <div className='box'>
          <h3>Name</h3>
          <input type="text" name="" id="" placeholder='Muhammad Hamza' />
          <h3>EMAIL</h3>
          <input type="email" name="" id="" placeholder='example@gmail.com' />
          <h4>PASSWORD</h4>
          <input type="password" name="" id="" placeholder='Password' />
          <h4>RE-TYPE PASSWORD</h4>
          <input type="password" name="" id="" placeholder='Password' />

          <div className='forgot'>
            <input type="checkbox" name="" id="" />
            <p>Terms&ConditionsApply</p>
          </div>

          <button>SIGN UP</button>
        </div>
    </div>
    <hr />
    </>
  )
}
