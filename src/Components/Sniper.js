import React from 'react'
import './Sniper.css'
import laptopimg from '../Assets/laptop.png'
import slack from '../Assets/Vector 32 (Stroke).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


function Sniper() {
  return (

    <div class="sniper section-padding">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="sniper-img">
                    <img src={laptopimg} alt="" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="sniper-content">
                    <div class="title-slack-sniper">
                        {/* <!-- <div class="shade">
                            <img src="./assests/shade.png" alt="">
                        </div> --> */}
                        <div class="slack-sniper">
                            <img src={slack} alt="" />
                        </div>
                        <h1 class="m-0">Prosperity  <span class="bold-text">Sniper</span> Software</h1>
                    </div>
                <p className='m-0'>Our personal software & platform with all the necessary tools you need to become a profitable trader.</p>
                </div>


            <div className='Sniper-main-content'>
                <div className='sniper-value'>
                    <h1 className='m-0'>$7,799 USD</h1>
                </div>
                <div className='sniper-list'>
                <div class="icon-content-sniper">
                        <div class="icon-sniper">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i>
                        </div>
                        <div class="content-sniper">
                            <p class="m-0">Laptop included</p>
                        </div>
                    </div>
                    <div class="icon-content-sniper">
                        <div class="icon-sniper">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i>
                        </div>
                        <div class="content-sniper">
                            <p class="m-0">Custom coded onto your ninja trader platform</p>
                        </div>
                    </div>
                    <div class="icon-content-sniper">
                        <div class="icon-sniper">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i>
                        </div>
                        <div class="content-sniper">
                            <p class="m-0">3 Month one-to-one mentorship to educate you on futures trading</p>
                        </div>
                    </div>
                    <div class="icon-content-sniper">
                        <div class="icon-sniper">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i>
                        </div>
                        <div class="content-sniper">
                            <p class="m-0">Access to the premium discord for 3 months (signals)</p>
                        </div>
                    </div>
                    <div class="icon-content-sniper">
                        <div class="icon-sniper">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i>
                        </div>
                        <div class="content-sniper">
                            <p class="m-0">Psychology sessions with our 6 figure coaches</p>
                        </div>
                    </div>
                    <div class="sniper-btn">
                        <a href="#">Join Now</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>


  )
}

export default Sniper
