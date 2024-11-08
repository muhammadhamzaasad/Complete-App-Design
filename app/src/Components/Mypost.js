import React from 'react'

export default function Mypost() {
  return (
    <>
    <div className='container7'>
        <div className='header'>
          <h1>Rose Garden Resturant</h1>
          <i class="fa-solid fa-list"></i>
        </div>

        <div className='Mypost'>
            <h3>My Post</h3>
            <i class="fa-regular fa-pen-to-square"></i>
        </div>

        <div className='text'>
            <textarea name="" id="" cols="34" rows="10" placeholder='Food Detail'></textarea>
        </div>

        <div className='mint'>
            <div className='city'>
                <i class="fa-regular fa-paper-plane"></i>
                <p>City Name</p>
            </div>

            <div className='mints'>
                <i class="fa-regular fa-clock"></i>
                <p>20 mint to Close</p>
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}
