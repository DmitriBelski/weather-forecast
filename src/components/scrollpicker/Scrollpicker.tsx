import React from 'react';

function Scrollpicker(): JSX.Element {
  return (
    <div className="scrollpicker__wrapper">
      <ul className="scrollpicker__list">
        <li className="scrollpicker__item body-font unselectable">Самара</li>
        <li className="scrollpicker__item body-font unselectable">Тольятти</li>
        <li className="scrollpicker__item body-font unselectable">Саратов</li>
        <li className="scrollpicker__item body-font unselectable">Казань</li>
        <li className="scrollpicker__item body-font unselectable">Краснодар</li>
      </ul>
    </div>
  );
}

export default Scrollpicker;
