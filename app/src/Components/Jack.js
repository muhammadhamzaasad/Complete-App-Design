import React from 'react'

export default function Jack() {
  return (
    <>
    <div className='container11'>
        <div className='header'>
            <div className='edit'>
                <i class="fa-solid fa-circle-chevron-left"></i>
                <p>Jack In The Box</p>
            </div>
        </div>

        <div className='Mypost'>
            <p>POST DETAIL</p>
        </div>

        <div className='text'>
            <textarea name="" id="" cols="34" rows="18" placeholder='Food Detail'></textarea>
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
