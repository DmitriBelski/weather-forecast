import React, { useState, useEffect, useRef } from 'react';

type InputBaseProps = {
  value: string,
  open: boolean,
  icon(opened: boolean): JSX.Element,
  children: React.ReactNode,
  extOpenhandler(value: boolean): void,
  changeInput(value: string): void,
}

function InputBase({
  value, icon, children, open, extOpenhandler, changeInput,
}: InputBaseProps): JSX.Element {
  const [opened, setOpened] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setOpened(open);
  }, []);

  useEffect(() => {
    extOpenhandler(opened);
    return opened ? focus() : blur();
  }, [opened]);

  const focus = () => inputRef.current?.focus();
  const blur = () => inputRef.current?.blur();

  useEffect(() => {
    setOpened(open);
  }, [open]);

  function clickHandler() {
    return setOpened(true);
  }

  return (
    <div className="inputbase">
      <div className={`inputbase__wrapper body inputbase__wrapper--${opened ? 'open' : ''}`} onClick={clickHandler} aria-hidden="true">
        <input type="text" className="inputbase__value body-font" ref={inputRef} value={value} onChange={(event) => changeInput(event.target.value)} />
        {icon(opened)}
      </div>

      <div className={`inputbase__dropdown inputbase__dropdown--${opened ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default InputBase;
