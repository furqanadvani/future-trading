import React from 'react'
import Header from './Nav'
import Testimonials from './Testimonials'
import Online from './Online'
import Trading from './Trading'
import Sniper from './Sniper'
import Inquiry from './inquiry'
import FAQ from './faq'
import Calendar1 from './calendar'
import Building from './Building'
import FooterEnd from './footer'
import Title from './title'

function Components() {
  return (
    <div>
      <Header />
      <Building />
      <Online />
      <Sniper />
      <Trading />
      <Testimonials />
      <Calendar1 />
      <Inquiry />
      <FAQ />    
      <FooterEnd />
      {/* <Title  
      /> */}
    </div>
  )
}

export default Components
