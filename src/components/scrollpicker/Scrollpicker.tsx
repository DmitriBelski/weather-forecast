import React, { useRef, useEffect } from 'react';
import { ISelectItem } from '../../App';

type ScrollpickerProps = {
  items: ISelectItem[],
  picked(value: string): void,
  selectedId: number,
}

function Scrollpicker({ items, picked, selectedId }: ScrollpickerProps): JSX.Element {
  /* eslint-disable  @typescript-eslint/no-array-constructor */
  const buttonRefs = useRef(new Array());

  function itemIndexById(id: number): number {
    return items.findIndex((item) => (item.id === id));
  }

  useEffect(() => {
    const index = itemIndexById(selectedId);
    buttonRefs.current[index]?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  }, [selectedId]);

  return (
    <div className="scrollpicker__wrapper">
      <ul className="scrollpicker__list">
        {items.map((item: ISelectItem) => (
          <li className="scrollpicker__itemwrapper" key={item.id}>
            <button ref={(ref) => buttonRefs.current.push(ref)} className={`scrollpicker__item body-font unselectable ${item.id === selectedId ? 'scrollpicker__item--selected' : ''}`} onClick={() => picked(item.item)} type="button">
              {item.item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scrollpicker;
