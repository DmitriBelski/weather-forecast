import React, { useState, useEffect } from 'react';
import { ISelectItem } from '../../App';
import { Condition } from '../../functions';
import Scrollpicker from '../scrollpicker/Scrollpicker';

type SelectProps = {
  initValue: string,
  items: ISelectItem[],
  setter(value: any): void
}

function Select({ initValue, items, setter }: SelectProps): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [opened, setOpened] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    setValue(initValue);
  }, []);

  useEffect(() => {
    if (value !== initValue) {
      setOpened(false);
      setHovered(false);
      setter(value);
    }
  }, [value]);

  function HoverHandler() {
    return setHovered((prev) => !prev);
  }

  function OpenHandler() {
    setHovered(true);
    return setOpened((prev) => !prev);
  }

  return (
    <div className="select">
      <div className={`select__input body ${Condition(opened, 'select__input--open', Condition(hovered, 'select__input--hover', ''))}`} onMouseOver={HoverHandler} onMouseOut={HoverHandler} onFocus={HoverHandler} onBlur={HoverHandler}>
        <span className="select__value body-font">{value}</span>
        <button className="select__arrow" type="button" onClick={OpenHandler} onKeyDown={OpenHandler}>
          <span role="navigation" className={`${opened ? 'select__toparrow' : 'select__bottomarrow'}`} />
        </button>
      </div>

      <div className={`select__dropdown ${opened ? 'select__dropdown--open' : ''}`}>
        <Scrollpicker itemsArr={items} setter={setValue} />
      </div>
    </div>
  );
}

export default Select;
