import React from 'react';
import CSS from 'csstype';
import { IForecast } from '../../App';

type CardProps = {
  size: string
  data: IForecast
}

function Card({ size, data }: CardProps): JSX.Element {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

  const card: CSS.Properties = {};
  const cardImg: CSS.Properties = {};
  if (size === 'big') {
    card.flex = '1 0 0';
    card.minWidth = '252px';
    cardImg.width = '160px';
    cardImg.height = '160px';
    cardImg.margin = '-9px 0';
  }

  function formatTemp(temp: number): string {
    return temp > 0 ? `+${temp}°` : `${temp}°`;
  }

  function getImg(icon: string) {
    const img = require(`../../images/weather-icons/${icon || '01d'}.png`).default;
    return img;
  }

  return (
    <div className="card" style={card}>
      <span className="card__date body-bold-font">{`${data.day} ${months[data.month - 1]} ${data.year}`}</span>
      <img className="card__img" style={cardImg} src={getImg(data.icon)} alt="" />
      <span className="card__tepmerature h1-font">{formatTemp(Math.round(data.temp))}</span>
    </div>
  );
}

export default Card;
