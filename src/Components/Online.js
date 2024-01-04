import React from 'react'
import './Online.css'
import Vector from '../Assets/Vector 32 (Stroke).png'
import portfolioicon from '../Assets/portfolio.png'
import online from '../Assets/online.png'
import target from '../Assets/target.png'
import  analytics  from '../Assets/analytics.png'

function Online() {
  return (
    <div>
      <div class="online section-padding">
    <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6">
                <div class="online-content">
                    <div class="title-slack-online">
                        <div class="slack-online">
                            <img src={Vector} alt=""/>
                        </div>
                        <h1 class="m-0">The Power of <span class="bold-text">Online</span> Training</h1>
                    </div>
                    <div class="online-list">
                        <div class="list-1">
                            <div class="icon-heading">
                                <div class="icon">
                                    <img src={target} alt=""/>
                                </div>
                                <div class="heading">
                                    <h3 className="p-0 m-0">Personalized Experience</h3>
                                </div>
                            </div>
                            <p className='m-0'>Trading is an individual journey, that for some, may be a new venture. We want to tailor your trading journey to fit around your current lifestyle. </p>
                        </div>
                        <div class="list-1">
                            <div class="icon-heading">
                                <div class="icon">
                                    <img src={analytics} alt=""/>
                                </div>
                                <div class="heading">
                                    <h3 class="p-0 m-0">Ongoing Support</h3>
                                </div>
                            </div>
                            <p className='m-0'>Whether you’re a brand new trader wanting to learn, or an experienced veteran wanting to develop existing skills, with PFT, you’re gaining access to a whole community. </p>
                        </div>
                        <div class="list-1">
                            <div class="icon-heading">
                                <div class="icon">
                                    <img src={portfolioicon} alt=""/>
                                </div>
                                <div class="heading">
                                    <h3 class="p-0 m-0">Experienced Coaches</h3>
                                </div>
                            </div>
                            <p className='m-0'>With over 10 years combined experience, our coaches are dedicated to help you build a skillset that you can carry with you for life.  </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6">
                <div class="online-img">
                    <img src={online} class="img-fluid" alt="" />
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Online
