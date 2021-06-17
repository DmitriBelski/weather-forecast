import React, { useState, useEffect, useRef } from 'react';
import OutsideClicker from '../outsideclicker/Outsideclicker';
import InputBase from '../inputbase/InputBase';
import ArrowIcon from '../arrowicon/Arrowicon';
import Scrollpicker from '../scrollpicker/Scrollpicker';
import { ISelectItem } from '../../App';

type SelectcityProps = {
  items: ISelectItem[],
  setCity(city: string): void
}

function Selectcity({ items, setCity }: SelectcityProps): JSX.Element {
  const [value, setValue] = useState<string>('Select city');
  const inputBaseRef = useRef<React.ReactNode>(null);
  const [inputValue, setInputValue] = useState<string>('Select city');
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    setCity(value);
  }, [value]);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  function pickHandler(pickedvalue: string) {
    setValue(pickedvalue);
    setOpened(false);
  }

  return (
    <OutsideClicker outClick={() => (typeof inputBaseRef?.current === 'function') && inputBaseRef?.current()}>
      <InputBase
        onRef={(closeInputBase) => {
          inputBaseRef.current = closeInputBase;
        }}
        value={value}
        open={opened}
        extOpenhandler={setOpened}
        changeInput={setInputValue}
        icon={(inputopened) => (
          <ArrowIcon opened={inputopened} onClick={() => setOpened((prev) => !prev)} />
        )}
      >
        <Scrollpicker items={items} picked={pickHandler} />
      </InputBase>
    </OutsideClicker>
  );
}

export default Selectcity;
