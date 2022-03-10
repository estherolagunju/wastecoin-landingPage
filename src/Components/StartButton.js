import React from 'react'
import Images  from'./Images/icon.png';

function StartButton() {
  return (
    <div>
        <button className='startbtn'> Get Started</button>
        {/* <img src= {Images} alt="" className='icon'/> */}
        <button className='introbtn'>Quick Intro</button>
    </div>
  )
}

export default StartButton