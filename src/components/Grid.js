import React from 'react'
import "./Grid.css"
import chrome from "../images/logo-chrome.svg"
import opera from "../images/logo-opera.svg"
import firefox from "../images/logo-firefox.svg"

const Grid = () => {
    return (
        <section className="grid">
            <div className="container ">
                <div className="grid__text">
              <h2 className='fwb'>Download the extension</h2>
              <p className="fww">
                We’ve got more browsers in the pipeline. Please do let us know
                if you’ve got a favourite you’d like us to prioritize.
              </p>
            </div>
            <div className="grid__box">
                <article className="grid__item">
                     <div className="grid__header">
                            <img src={chrome} alt="chrome" />
                  <h3 className='fwb'>Add to Chrome</h3>
                  <span className="fww">Minimum version 62</span>
                </div>
                <div className="grid__footer">
                  <button className="btn btn-blue grd__btn">Add & Install Extension</button>
                </div>
                </article>
                <article className="grid__item g2">
                     <div className="grid__header">
                            <img src={opera} alt="chrome" />
                  <h3 className='fwb'>Add to Opera</h3>
                  <span className="fww">Minimum version 55</span>
                </div>
                <div className="grid__footer">
                  <button className="btn btn-blue grd__btn">Add & Install Extension</button>
                </div>
                </article>
                <article className="grid__item g3">
                     <div className="grid__header">
                            <img src={firefox} alt="chrome" />
                  <h3 className='fwb'>Add to Firefox</h3>
                  <span className="fww">Minimum version 46</span>
                </div>
                <div className="grid__footer">
                  <button className="btn btn-blue grd__btn">Add & Install Extension</button>
                </div>
                </article>
            </div>
            </div>
        </section>
    )
}

export default Grid
