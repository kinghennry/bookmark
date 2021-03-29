import React from 'react'
import './Hero.css'
import heroImg from "../images/illustration-hero.svg"
function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__flex">
                    <div className="hero__imgDiv">
                        <img src={heroImg} alt="" className="hero__img"/>
                    </div>
                    <div className="hero__text">
                <h1 className="fwb"> A Simple Bookmark Manager</h1>
                <p className="fww ">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
  <div className="btns">
      <a href="/" className="btn btn-blue">Get it on Chrome</a>
      <a  href="/" className="btn btn-gray"> Get it on Firefox</a>
  </div>
                    </div>
                </div>
                <div className="hero__tab">
                <h1 className="fwb ct">Features</h1>
                    <p className="fww ct">
                    Our aim is to make it quick and easy for you to access your favourite websites.Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
