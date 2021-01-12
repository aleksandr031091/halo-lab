/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Item.module.scss';

const Item = ({ author, generalLogo, rating, stars, text }) => {
  return (
    <div className={`swiper-slide	 ${styles.container}`}>
      <div className={styles.rating}>
        <span className={styles.mark}>{rating}</span>
        <img src={stars.publicURL} alt="stars" className={styles.stars} />
        <img
          src={generalLogo.publicURL}
          alt="general logotype"
          loading="lazy"
          className={styles.generalLogo}
        />
      </div>
      <div className={styles.review}>
        <div className={styles.text}>{text}</div>
        <div className={`${styles.name} ${styles.top}`}>&#8212;&#8194;{author}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  author: PropTypes.string.isRequired,
  // companyLogo: PropTypes.object.isRequired,
  generalLogo: PropTypes.object.isRequired,
  rating: PropTypes.string.isRequired,
  stars: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
