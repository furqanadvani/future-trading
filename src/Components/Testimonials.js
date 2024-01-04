import React from 'react'
import './Testimonials.css'
import cardimg from '../Assets/card-img.png'

function Testimonials() {
  return (
    <>
<div class="Testimonials section-padding">
    <div class="container">
        <div class="test-heading d-flex align-items-center justify-content-center">
            <h1>Testimonials</h1>
        </div>
        <div class="row d-flex justify-content-start align-items-start">
            <div class="col-md-6">
                <div class="test-card card-small">
                    <p>Ali is a great teacher, Highly recommend the sessions with him!</p>
                    <div class="card-img-text">
                        <div class="card-img">
                            <img src={cardimg} class="img-fluid" alt="" />
                        </div>
                        <div class="card-text">
                            <h4 className='m-0'>Ayden</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="test-card align-items-lg-start">
                    <p>While I was a little hesitant at first, the team at Prosperity Futures Trading have been amazing and I feel like I’m improving every morning with them. From starting with basic knowledge to now being a profitable trader, this has made a huge impact on my life.</p>
                    <div class="card-img-text">
                        <div class="card-img">
                            <img src={cardimg} class="img-fluid" alt="" />
                        </div>
                        <div class="card-text">
                            <h4 className='m-0'>Ayden</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Testimonials
