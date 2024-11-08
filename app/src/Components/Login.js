import React from 'react'

export default function Login() {
  return (
    <>
    <div className='container1'>
        <div className='header'>
          <i class="fa-solid fa-circle-chevron-left"></i>
          <h1>Log In</h1>
        </div>

        <div className='paragraph'>
          <p>Please sign in to your existing account</p>
        </div>

        <div className='box'>
          <h3>EMAIL</h3>
          <input type="email" name="" id="" placeholder='example@gmail.com' />
          <h4>PASSWORD</h4>
          <input type="password" name="" id="" placeholder='Password' />

          <div className='forgot'>
            <input type="checkbox" name="" id="" />
            <p>Rememberme</p>
            <button><a href="/">ForgotPassword</a></button>
          </div>

          <button>LOG IN</button>

          <div className='para'>
            <p>Don't have an account? <a href="/">SIGN UP</a></p>
          </div>
        </div>
    </div>
    <hr />
    </>
  )
}
