import { useState } from "react";
import "../style/faq.css";
import { faqs } from "../data/faqs";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
   
      <section className="section-bg">
        <div className="container">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Clear answers to common dental concerns
          </p>
        </div>
      </section>

      
      <section className="faq-section">
        <div className="container">
          {faqs.map((item, index) => (
            <div
              className={`faq-box ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.q}
                <span className="arrow">⌄</span>
              </button>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
