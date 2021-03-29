import React,{useState} from 'react'
import "./FaQs.css"
import data from "../data"
import Accordion from "./Accordion"

function FaQs() {
  const [questions, setQuestions] = useState(data)

    return (
        <section className="faqs">
            <div className="container px py ">
                <div className="faqs__text fx ai fc">
                <h2 className="ct">Frequently Asked Questions</h2>
              <p className="ma">
                Here are some of our FAQs. If you have any other questions you’d
                like answered please feel free to email us.
              </p>
          </div>
          <div className="accordion ">
            {questions.map(question => {
              return  <Accordion key={question.id} {...question} />
            })}
            <button className="faqs__btn">More Info</button>
          </div>
            </div>
        </section>
    )
}

export default FaQs
