import React, { useState, useEffect } from 'react';
import { ISelectItem } from '../../App';

type ScrollpickerProps = {
  getItems?(): ISelectItem[]
  itemsArr?: ISelectItem[]
  setter(value: any): void
}

Scrollpicker.defaultProps = {
  getItems: () => null,
  itemsArr: [],
};

function Scrollpicker({ getItems, itemsArr, setter }: ScrollpickerProps): JSX.Element {
  const [items, setItems] = useState<ISelectItem[]>([]);

  useEffect(() => {
    if (getItems) {
      const newItems = getItems();
      setItems(newItems);
    }
  }, [getItems]);

  useEffect(() => {
    if (itemsArr) {
      setItems(itemsArr);
    }
  }, [itemsArr]);

  return (
    <div className="scrollpicker__wrapper">
      <ul className="scrollpicker__list">
        {items.map((item: ISelectItem) => (
          <li className="scrollpicker__itemwrapper" key={item.id}>
            <button className="scrollpicker__item body-font unselectable" onClick={() => setter(item.item)} type="button">
              {item.item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scrollpicker;
