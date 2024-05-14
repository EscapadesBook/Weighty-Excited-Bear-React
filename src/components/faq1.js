import React from 'react'

import PropTypes from 'prop-types'

import './faq1.css'

const FAQ1 = (props) => {
  return (
    <div className="faq1-faq7 thq-section-padding">
      <div className="faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column faq1-list">
          <div className="faq1-list-item1">
            <p className="faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="faq1-list-item2">
            <p className="faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="faq1-list-item3">
            <p className="faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="faq1-list-item4">
            <p className="faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="faq1-list-item5">
            <p className="faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="faq1-container">
            <button className="thq-button-outline faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ1.defaultProps = {
  action1: 'Contact',
  faq4Question: 'What makes this new cryptocurrency different from others?',
  faq2Answer:
    'You can invest in this new cryptocurrency by purchasing it through various cryptocurrency exchanges or platforms.',
  faq3Answer:
    'Yes, the new cryptocurrency is designed with robust security features to ensure the safety of transactions and user data.',
  faq5Answer:
    'Yes, you can mine this new cryptocurrency using mining hardware or by participating in mining pools.',
  heading2: 'Still have a question?',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  faq1Question: 'What is the new cryptocurrency all about?',
  faq2Question: 'How can I invest in this new cryptocurrency?',
  faq1Answer:
    'The new cryptocurrency is a digital currency that utilizes blockchain technology for secure and decentralized transactions.',
  faq4Answer:
    'This new cryptocurrency stands out due to its innovative technology, strong community support, and potential for growth in the market.',
  heading1: 'FAQs',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq3Question: 'Is the new cryptocurrency safe to use?',
  faq5Question: 'Can I mine this new cryptocurrency?',
}

FAQ1.propTypes = {
  action1: PropTypes.string,
  faq4Question: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq5Answer: PropTypes.string,
  heading2: PropTypes.string,
  content1: PropTypes.string,
  faq1Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  heading1: PropTypes.string,
  content2: PropTypes.string,
  faq3Question: PropTypes.string,
  faq5Question: PropTypes.string,
}

export default FAQ1
