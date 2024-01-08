import React from 'react'
import './about.css'
import { aboutBg } from '../../assets'
import AboutBio from '../../components/about components/AboutBio'
import AboutDetails from '../../components/about components/AboutDetails'
import AboutImgSlider from '../../components/about components/AboutImgSlider'
import OurAward from '../../components/about components/OurAward'
import AboutTeam from '../../components/about components/AboutTeam'

function About() {
  return (
    <div className="about-main">
      <div className="about-container">
        <img src={aboutBg} />
        <div className="about-img-text">
          <p>About us</p>
          <h1>Welcome to our Ajit Shop</h1>
        </div>
      </div>
      <AboutBio />
      <AboutDetails />
      {/* <AboutImgSlider /> */}
      <OurAward />
      <AboutTeam />
    </div>
  )
}

export default About
