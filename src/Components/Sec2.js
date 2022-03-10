import React from 'react'
import Images  from'./Images/coin.png';

function Sec2() {
  return (
    <div className='hmm'>
        <div className='feat1'>
            <p id='you1'><b> 1.34</b> Mt</p>
            <p className='sub1'>CO2 saved</p>
        </div>

        <div className='feat2'>
            <b id='you2'>1,007,856 </b>
            <p className='sub2'>recycables collected</p>
        </div>

        <div className='feat2'>
           <b id='you3'> 123,456</b> 
            <p className='sub3'>active recyclers</p>
        </div>

        <div className='feat2'>
        <img src= {Images} alt="" className='coin'/>
            <b className='you4'>1,345.67</b>
            <p className='sub4'>disbursed</p>
        </div>
    </div>
  )
}

export default Sec2