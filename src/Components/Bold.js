import React from 'react'
import Images  from'./Images/iphone.png';


function Bold() {
  // const names = ['Karen', 'Richard', 'Tyler'];
  // const lengths = names.map( name => name.length );
  // const element = names.filter(name => name.length < 6 );

  // console.log(element) 

  return (
    
    <div className='writeup'>
        <p className='bold'>
            Make your recycling <br></br>
            Effort count and <br></br>
            rewarding
        </p>
        <img src= {Images} alt="" className='iphone'/>
        
    </div>
  )
}

export default Bold