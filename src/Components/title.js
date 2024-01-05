import React from 'react'
import shade from '../Assets/title_shade.png'
import slack from '../Assets/Vector 32 (Stroke).png'
import  './title.css'


function Title() {
  return (
    <div className='col-md-6'>
      
    <div className='title-wth-shade'>

        <div className='shade-slack'>
                <img src={shade} alt='' className='shade' />
                <img src={slack}     alt=''  className='slack'/>
        </div>


        <div className='title'>
            <h1>
                Our <span className='bold'>Trading</span> <span className='after-break'>Community</span>
            </h1>
        </div>
    </div>


    </div>
  )
}

export default Title
