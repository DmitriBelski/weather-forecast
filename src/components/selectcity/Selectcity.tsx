import React, { useState, useEffect } from 'react';
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
    <InputBase
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
  );
}

export default Selectcity;
