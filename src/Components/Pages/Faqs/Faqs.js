import React,  {useState} from "react";
// import React, { useState } from "react";

import "./Faqs.css"

const Faqs = () => {
  const data = [
    {
      question: "What is netflix",
      answers:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices",
    },
    {
      question: "How much does netflix cost?",
      answers: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs",
    },
    {
      question: "Where can i watch?",
      answers: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device t",
      
    },
    {
      question: "How do i cancel?",
      answers: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – st ",
    },
    {
      question: "What can i watch?",
      answers: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };


  return (

    <div>


<>

      <section className="faqs">
      <h1 className="heading">Faqs</h1>

        <div className="items">
          {
          data.map((items,i) => {
            return (
              <div className="wrapper"  key={i}  >
                
                <div className="question"  onClick={ ()=> handleSelect(i)}>
                  <h3> {items.question} </h3>
                  <img
                    src={require("../../../Assests/down-arrow-icon-vector-21641401.jpg")}
                    alt="" className={ selected===i ?"reversed": "" }
                  />
                </div>

                <div className=  { selected === i ?  "answers.show" : "answers"  }>
                  <p> {items.answers} </p>
                </div>
            </div>
            );
          })
          }
        </div>

        <div className="low">
            <h1>Ready to watch? Enter your email to create or restart your membership</h1>
            <div className="strt">
    <input type="email" id='hero' placeholder='enter-mail'/>
    <button>GET STARTED </button>

    </div>
    
        </div>
      </section>
    </>
    </div>


  )
  
  
  
};

export default Faqs;
