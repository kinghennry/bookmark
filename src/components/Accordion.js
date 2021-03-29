import React,{useState} from 'react'
import "./Accordion.css"
import{ FiChevronDown} from "react-icons/fi"

function Accordion({title,answer}) {
        const [showInfo, setShowInfo] = useState(false)

    return (
        <article className="accordion_item" >
                  <div className="question fx sb ai ">
                    <span className="question__text">{title}</span>
                    <FiChevronDown className={`icon ${showInfo  ? 'icon--active': ''}`} onClick={() => {setShowInfo(!showInfo)}}/>                    
                  </div>
                  <div className="answer">
                    {showInfo &&   <p>{ answer }</p>}
                  </div>
              </article>
    )
}

export default Accordion
