import React, { useState, useCallback } from 'react';
import CSS from 'csstype';
import Card from '../card/Card';
import leftArrow from '../../images/icons/24/chevron-left.svg';
import rightArrow from '../../images/icons/24/chevron-right.svg';
import { IForecast } from '../../App';

type SliderProps = {
  data: IForecast[]
  count: number
  slider: number
  windowWidth: number
}

function Slider({
  data, count, slider, windowWidth,
}: SliderProps): JSX.Element {
  const [firstCardNumber, setfirstCardNumber] = useState<number>(0);
  
  const mobileSlider: CSS.Properties = {};
  if (windowWidth <= 768) {
    mobileSlider.left = `${sliderHandler()}px`;
  }
  
  function increment() {
    if (firstCardNumber > 0) {
      setfirstCardNumber((prev) => prev - 1);
    }
  }

  function decrement() {
    if (firstCardNumber < 4) {
      setfirstCardNumber((prev) => prev + 1);
    }
  }

  function sliderHandler() {
    const start = 0.074 * windowWidth;
    const fullLenght = 1278 - 0.86 * windowWidth + 2 * 0.074 * windowWidth;
    return start - 0.01 * slider * fullLenght;
  }

  const generateItemsFromCount = useCallback(() => new Array(count).fill('').map((_, i: number) => firstCardNumber + i), [firstCardNumber]);

  return (
    <div className="slider" style={mobileSlider}>
      <button onClick={() => increment()} type="button">
        <img className="slider__left-arrow" src={leftArrow} alt="left arrow" />
      </button>
      <button onClick={() => decrement()} type="button">
        <img className="slider__right-arrow" src={rightArrow} alt="right arrow" />
      </button>
      {generateItemsFromCount().map((n: number) => <Card size="small" data={data[n]} key={n} />)}
    </div>
  );
}

export default Slider;
