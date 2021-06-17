import React, { useState, useEffect, useRef } from 'react';
import OutsideClicker from '../outsideclicker/Outsideclicker';
import InputBase from '../inputbase/InputBase';
import ArrowIcon from '../arrowicon/Arrowicon';
import Scrollpicker from '../scrollpicker/Scrollpicker';
import { ISelectItem } from '../../utils/interfaces';

type SelectcityProps = {
  items: ISelectItem[],
  setCity(city: string): void
};

function Selectcity({ items, setCity }: SelectcityProps): JSX.Element {
  const [value, setValue] = useState<string>('Select city');
  const inputBaseRef = useRef<React.ReactNode>(null);
  const [closeItemId, setCloseItemId] = useState<number>(NaN);
  const [inputValue, setInputValue] = useState<string>('Select city');
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    setCity(value);
  }, [value]);

  function getCloseItemId(targetValue: string): void {
    if (targetValue) {
      const maxIndex = items.map((i) => i.item.toLowerCase().indexOf(targetValue.toLowerCase()))
        .map((i) => (i === -1 ? items.length : i))
        .reduce((acc, current, index, arr) => (current < arr[acc] ? index : acc), 0);
      if (maxIndex < items.length) {
        setCloseItemId(items[maxIndex].id);
      } else {
        setCloseItemId(NaN);
      }
    }
  }

  useEffect(() => {
    setValue(inputValue);
    getCloseItemId(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (opened) {
      getCloseItemId(value);
    }
  }, [opened]);

  function pickHandler(pickedvalue: string) {
    setValue(pickedvalue);
    setOpened(false);
  }

  function itemIndexById(id: number): number {
    return items.findIndex((item) => (item.id === id));
  }

  function inputKeyEvent(key: string) {
    if (key === 'Enter') {
      setValue(items[itemIndexById(closeItemId)].item);
      setOpened(false);
      return;
    }
    if (key === 'ArrowDown') {
      const index = itemIndexById(closeItemId);
      if (index < items.length - 1) {
        setCloseItemId(items[index + 1].id);
      }
      return;
    }
    if (key === 'ArrowUp') {
      const index = itemIndexById(closeItemId);
      if (index > 0) {
        setCloseItemId(items[index - 1].id);
      }
    }
  }

  return (
    <OutsideClicker outClick={() => (typeof inputBaseRef?.current === 'function') && inputBaseRef?.current()}>
      <InputBase
        onRef={(closeInputBase) => {
          inputBaseRef.current = closeInputBase;
        }}
        keyEvent={inputKeyEvent}
        value={value}
        open={opened}
        extOpenhandler={setOpened}
        changeInput={setInputValue}
        icon={(inputopened) => (
          <ArrowIcon opened={inputopened} onClick={() => setOpened((prev) => !prev)} />
        )}
      >
        <Scrollpicker items={items} picked={pickHandler} selectedId={closeItemId} />
      </InputBase>
    </OutsideClicker>
  );
}

export default Selectcity;
