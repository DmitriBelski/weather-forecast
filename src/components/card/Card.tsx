import React from 'react';
import weather from '../../images/weather-icons/13d.png';

function Card(): JSX.Element {
  return (
    // Small Card
    <div className="card" style={{ width: '174px' }}>
      <span className="card__date body-bold-font">27 sep 2021</span>
      <img className="card__img" src={weather} alt="storm" />
      <span className="card__tepmerature h1-font">+17°</span>
    </div>

    // Big Card
    // <div className="card" style={{ minWidth: '252px' }}>
    //   <span className="card__date body-bold-font">27 sep 2021</span>
    //   <img className="card__img" style={{ width: '160px', height: '160px', margin: '-9px 0' }} src={weather} alt="storm" />
    //   <span className="card__tepmerature h1-font">+17°</span>
    // </div>
  );
}

export default Card;
