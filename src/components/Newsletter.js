import React,{useState} from 'react'
import "./Newsletter.css"
function Newsletter() {
    const [input, setInput] = useState("")
    return (
        <section className='newsletter'>
            <div className="container px py">
                <div className="newsletter__text fx ai fc">
            <p>35,000+ already joined</p>
            <h2 className="ct"> Stay up-to-date with what we’re doing</h2>
            <div className="form fx">
                <form action="" className=" ">
                        <input type="text" placeholder="Enter your Email Address" value={input}/>
                        <button className="frm__btn"> Contact Us</button>
                        </form>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
