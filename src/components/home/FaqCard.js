import React from 'react';

function FaqCard(props) {
  return (
    <div className="faq-card">
      <div className="faq-qestion-card faq-style-card">
        <div className="faq-style-content-card">
          <div className="faq-style-text-card">
            <h6>{props.question}</h6>
          </div>
        </div>
      </div>
      <div className="faq-answer-card faq-style-card">
        <div className="faq-style-content-card">
          <div className="faq-style-text-card">
            <p>{props.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqCard;
