import React from 'react';
import Card from '../card/Card';
import leftArrow from '../../images/icons/24/chevron-left.svg';
import rightArrow from '../../images/icons/24/chevron-right.svg';

function Slider(): JSX.Element {
  return (
    <div className="slider">
      <img className="slider__left-arrow" src={leftArrow} alt="left arrow" />
      <img className="slider__right-arrow" src={rightArrow} alt="right arrow" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Slider;
