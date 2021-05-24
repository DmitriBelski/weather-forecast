import React, { useState, useEffect } from 'react';
import Scrollpicker from '../scrollpicker/Scrollpicker';

type SelectProps = {
  initValue: string,
  items: string[],
  setter(city: string): void
}

function Select({ initValue, items, setter }: SelectProps): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [opened, setOpened] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  useEffect(() => {
    if (value !== initValue) {
      setOpened((prev) => !prev);
      setter(value);
    }
  }, [initValue, value, setter]);

  function HoverHandler() {
    return setHovered((prev) => !prev);
  }

  function OpenHandler() {
    return setOpened((prev) => !prev);
  }

  function Condition(condition, then, otherwise) {
    return condition ? then : otherwise;
  }

  return (
    <div className="select" onMouseOver={HoverHandler} onMouseOut={HoverHandler} onFocus={HoverHandler} onBlur={HoverHandler}>
      <div className={`select__input body ${Condition(opened, 'select__input--open', Condition(hovered, 'select__input--hover', ''))}`}>
        <span className="select__value body-font">{value}</span>
        <button className="select__arrow" type="button" onClick={OpenHandler} onKeyDown={OpenHandler}>
          <span role="navigation" className={`${opened ? 'select__toparrow' : 'select__bottomarrow'}`} />
        </button>
      </div>

      <div className={`select__dropdown ${opened ? 'select__dropdown--open' : ''}`}>
        <Scrollpicker />
      </div>
    </div>
  );
}

export default Select;
