import React from "react";

import PropTypes from "prop-types";

const FeatureCard = (props) => {
  return (
    <>
      <div className={`feature-card22-feature-card ${props.rootClassName} `}>
        <div className="feature-card22-container">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="feature-card22-image"
          />
          <h2 className="feature-card22-title">{props.title}</h2>
          <span className="feature-card22-text">{props.description}</span>
        </div>
      </div>
      <style jsx>
        {`
          .feature-card22-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .feature-card22-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card22-image {
            width: 40px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22-title {
            font-size: 22px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card22-text {
            font-size: 16px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 400;
          }

          @media (max-width: 767px) {
            .feature-card22-feature-card {
              flex-direction: row;
            }
            .feature-card22-container {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-card22-container {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
};

export default FeatureCard;
