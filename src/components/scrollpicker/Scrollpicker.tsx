import React, { useRef, useEffect } from 'react';
import { ISelectItem } from '../../App';

type ScrollpickerProps = {
  items: ISelectItem[],
  picked(value: string): void,
}

function Scrollpicker({ items, picked }: ScrollpickerProps): JSX.Element {
  return (
    <div className="scrollpicker__wrapper">
      <ul className="scrollpicker__list">
        {items.map((item: ISelectItem) => (
          <li className="scrollpicker__itemwrapper" key={item.id}>
            <button className="scrollpicker__item body-font unselectable" onClick={() => picked(item.item)} type="button">
              {item.item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scrollpicker;
