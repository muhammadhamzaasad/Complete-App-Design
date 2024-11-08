import React from 'react'

export default function Postdetail() {
  return (
    <>
    <div className='container8'>
        <div className='header'>
            <div className='edit'>
                <i class="fa-solid fa-circle-chevron-left"></i>
                <p>Edit Post</p>
            </div>
            <p className='p'>DELETE POST</p>
        </div>

        <div className='Mypost'>
            <p>POST DETAIL</p>
        </div>

        <div className='text'>
            <textarea name="" id="" cols="37" rows="15" placeholder='Food Detail'></textarea>
        </div>

        <div className='mint'>
            <div className='city'>
                <i class="fa-regular fa-paper-plane"></i>
                <p>City Name</p>
            </div>
        </div>

        <div className='close'>
            <p>CLOSE TIME :</p>
            <button>09:00 PM</button>
        </div>

        <button className='button'>UPDATE POST</button>
    </div>
    <hr />
    </>
  )
}
