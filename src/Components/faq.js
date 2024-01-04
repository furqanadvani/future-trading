import React, { useState } from 'react';
import './faq.css';
import shadepage from '../Assets/shade-pro-max.png'
import star from '../Assets/Star 11.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const faqData = [
    { id: 1, question: 'How will the Prosperity sniper software be added to my ninja trader?', answer: 'This FAQ section provides answers to commonly asked questions about our service.' },
    { id: 2, question: 'Do I need the coded software to join the monthly or weekly premium discord?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
    { id: 3, question: 'How do I cancel my subscription?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
    { id: 4, question: 'Can I get a refund for my software or subscription?', answer: 'No, our users are using many different brokers and platforms to place trades , our education is adaptable through all platforms.' },
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq-main section-padding'>
      <div className='page-shade-faq'>
        <img src={shadepage} alt='' />
      </div>
      <div className='star-page-faq'>
        <img src={star} alt='' />
      </div>
      <div className='container'>

        <div className='faq-heading text-center'>
          <h1>Frequently Asked Questions</h1>
        </div>


        <div className="faq-container">
          {faqData.map((item) => (
            <div className="faq-item" key={item.id} onClick={() => toggleAnswer(item.id)}>
              <div className="question d-flex justify-content-between">{item.question}
                <div className='plus d-flex '>
                  <h3 className='m-0'>+</h3>
                </div>
              </div>
              {activeIndex === item.id &&
                <div className='d-flex justify-content-between'>
                  <div className="answer">{item.answer}

                  </div>
                  <div>
                    <h3 className='m-0'>-</h3>
                  </div>
                </div>
              }
              <hr className='' />
            </div>
          ))}
        </div>
        <div className='disclaimer'>

          <p className='m-0'>
            <span className='disc-bold'>Disclaimer:</span> We do not guarantee success or profitability. We and our affiliates are not verified or certified professionals. We are not financial advisors. We never give any advice here, only educated and individualized opinions. Our Discord server is intended for educational and entertainment purposes only.
          </p>

        </div>
      </div>

    </div>
  );
};

export default FAQ;
