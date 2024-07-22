import React from 'react'
import HomeSection from '../../components/home-section/HomeSection';
import About from '../../components/about/About';
import CardService from '../../components/card-service/CardService';
import CardProject from '../../components/card-project/CardProject';
import Faq from '../../components/faq/Faq';

function HomePage() {
  return (
    <div>
      <HomeSection />
      <About />
      <CardService />
      <CardProject />
      <Faq />
    </div>
  )
}

export default HomePage
