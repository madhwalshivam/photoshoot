import React from 'react'
import Hero from '../components/Hero'
import HomeServices from './HomeServices'
import Seo from './Location'
import Testimonials from '../components/Testimonial'
import Youtube from '../components/Youtube'
import Instagram from '../components/Instagram'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Best Pre-Wedding Services in Delhi | Capturing Moments</title>
        <meta
          name="description"
          content="Explore our expert photography services including pre-wedding, maternity, and more in Delhi. Capturing timeless memories just for you."
        />
        <meta
          name="keywords"
          content="photography in Delhi, pre-wedding shoot, maternity photography, baby shoot, best photographers in Delhi"
        />
        <link rel="canonical" href="https://thepicturetown.com/" />
      </Helmet>

      <Hero />
      <Seo />
      <HomeServices />
      <Youtube />
      <Instagram />
      <Testimonials />
    </div>
  )
}

export default Home
