import React from 'react'
import Hero from '../components/Hero'
import HomeServices from './HomeServices'
import Seo from './Location'
import Testimonials from '../components/Testimonial'
import Youtube from '../components/Youtube'
import Instagram from '../components/Instagram'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Seo/>
      <HomeServices/>
      <Youtube/>
      <Instagram/>
      <Testimonials/>
    </div>
  )
}

export default Home
