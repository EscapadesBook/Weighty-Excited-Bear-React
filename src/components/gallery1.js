import React from 'react'

import PropTypes from 'prop-types'

import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-gallery3 thq-section-padding">
      <div className="gallery1-max-width thq-section-max-width">
        <div className="gallery1-section-title">
          <h2 className="gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="gallery1-content">
          <div className="gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery1.defaultProps = {
  image1Alt: 'Cryptocurrency Logo',
  image3Alt: 'Cryptocurrency Wallet',
  image2Alt: 'Cryptocurrency Trading Graph',
  image3Src:
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5NDMyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1589820781775-d65c0f7cd62f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5NDMyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1695478524035-987d63eb0b30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNTY5NDMyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'Take a look at some images showcasing our trending cryptocurrency in 2024.',
  heading1: 'Explore Our Cryptocurrency Gallery',
}

Gallery1.propTypes = {
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default Gallery1
