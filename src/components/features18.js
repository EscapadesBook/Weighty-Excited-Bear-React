import React from 'react'

import PropTypes from 'prop-types'

import './features18.css'

const Features18 = (props) => {
  return (
    <div className="features18-layout349 thq-section-padding">
      <div className="features18-max-width thq-section-max-width">
        <div className="features18-content">
          <div className="features18-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="features18-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
        <div className="features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

Features18.defaultProps = {
  feature1ImageAlt: 'Secure Transactions',
  feature1Description:
    'Our cryptocurrency uses cutting-edge technology to ensure secure and private transactions, giving you peace of mind when managing your assets.',
  feature1Title: 'Advanced Security',
  feature1Slogan: 'Protecting Your Assets',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1715433493380-5a3376135f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5NDMyOHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features18.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default Features18
