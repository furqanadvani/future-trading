import React from 'react'
import './Building.css'
import shade from '../Assets/title_shade.png'
import lap from '../Assets/Group 1000004793.png'
import slack from '../Assets/Vector 32 (Stroke).png'
import star from '../Assets/Star 12.png'
import laptopfull from '../Assets/ezgif-2-1038c4662f 1.png'

function Building() {
  return (
    <div class="section-padding">
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 ">
                    <div class="hero-main">

                        <div class="hero-content">
                            <div class="star-hero">
                                <img src={star} alt="" />
                            </div>
                            <div class="shade-hero">
                                <img src={shade} alt="" />
                            </div>

                            <p>PROSPERITY FUTURE TRADING</p>
                            <div class="title-slack-bu d-flex justify-content-center align-items-center">
                                {/* <!-- <div class="shade">
                                                <img src="./assests/shade.png" alt="">
                                            </div> --> */}
                                <div class="slack-bu">
                                    <img src={slack} alt=""/>
                                </div>
                                <h1 class="m-0">Building Profitable </h1>
                            </div>
                            <h3>Futures Traders</h3>
                       
                            </div>
                            <div class="main-para-btn">
                                <p class="" >Your personalized community for trading futures. We hold your hand every step
                                    of the way, no questions go unanswered. Our program has helped many traders with entry
                                    and exit strategies in these volatile markets.
                                </p>
                                <div class="btn-main">
                                    <button>Get Started</button>
                                </div>
                        </div>
                        </div>
                    </div>
            </div>
                    <div class="hero-img col-12 col-sm-12">
                        <img src={laptopfull} className='img-fuild full-laptop' alt="laptopimg" />
                        <img src={lap} className='img-fluid' alt="" />
                    </div>
        </div>
    </div>

  )
}

export default Building
