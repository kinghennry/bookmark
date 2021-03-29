import React from 'react'
import "./Footer.css"
import img from "./logo-bookmark-white.svg"
import fb from "../images/icon-facebook.svg"
import twt from "../images/icon-twitter.svg"
function Footer() {
    return (
        <footer>
            <div className="container px py ">
                <div className="flex sb ai">
                <div className="footer__nav sb fx ai ">
                <img src={img} alt=""/>
                    <div className="footer__navLinks">
                        <a href="">FEATURES</a>
                        <a href="">PRICING</a>
                        <a href="">CONTACT</a>
                </div>
                </div>
                <div className="footer__icons">
                    <img src={fb} alt=""/>
                    <img src={twt} alt=""/>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
