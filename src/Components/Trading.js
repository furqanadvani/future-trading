import React from 'react'
import  './Trading.css'
import slack from '../Assets/Vector 32 (Stroke).png'
import daimond from '../Assets/daimond.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shadepage from '../Assets/shade-pro-max.png'
import star from '../Assets/Star 11.png'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Trading() {
  return (
    <div class="trading section-padding">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center"> 
        <div className='page-shade'>
            <img src={shadepage} alt=''/>
        </div>
        <div className='star-page'>
            <img src={star} alt=''/>
        </div>
        </div>
            <div class="title-slack-kit d-flex justify-content-center align-items-center">
                 {/* <div class="shade-kit">
                    <img src={shadetitle} alt="" />
                </div>  */}
                <div class="slack-kit">
                    <img src={slack} alt=""/>
                </div>
                <h1 class="m-0">Our <span class="bold-text">Trading</span> Community</h1>
            </div>


<div className='row justify-content-center' >

<div className='col-md-6 col-lg-6 col-12 col-sm-12'>


            <div class="monthly-card d-flex justify-content-center align-items-center">

            <div class="Monthly ">
                <div className='monthly-header'>

                
                <div class="daimond-heading">
                    <div class="daimond">
                        <img src={daimond} class="img-fluid" alt=""/>
                    </div>
                    <div class="heading">
                        <h2 class="m-0">Monthly Subscription</h2>
                    </div>
                </div>
                <div class="mothly-value">
                    <h4 class="m-0"><span class="value">$295 </span> / Month</h4>
                </div>
                </div>
                <div class="monthly-content">
                    <div class="icon-content">
                        {/* <div class="icon-mon">
                            <img src={checkicon} alt="" />
                        </div> */}
                        <div class="icon-mon">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 
                        </div>
                        <div class="contnt-mon">
                            <p class="m-0">2 weeks FREE with first month subscription!</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 
                        </div>
                        <div class="contnt-mon">
                            <p class="m-0">Access to premium discord server (signals)</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        {/* <div class="icon-mon">
                        <img src={checkicon} alt="" />
                        </div> */}
                         <div class="icon-mon">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 
                        </div>
                        <div class="contnt-mon">
                            <p class="m-0">1 Month mentorship included</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        {/* <div class="icon-mon">
                        <img src={checkicon} alt="" />
                        </div> */}
                         <div class="icon-mon">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 
                        </div>
                        <div class="contnt-mon">
                            <p class="m-0">1 single psychology session included</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 

                        </div>
                        
                        <div class="contnt-mon">
                            <p class="m-0">Weekly education sessions (Monday/Wednesday)</p>
                        </div>
                    </div>
                    <div class="icon-content">
                        <div class="icon-mon">
                        <i><FontAwesomeIcon size='sm' icon={faCheck} style={{color:"#ffffff"}}/></i> 
                        </div>
                         
                        <div class="contnt-mon">
                            <p class="m-0">Prosperity Sniper Software preview session</p>
                        </div>
                    </div>
                    <div class="monthly-btn">
                        <button>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>





         </div> 
    </div>
  )
}

export default Trading
