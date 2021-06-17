import React, { RefObject, useEffect, useRef } from 'react';
import CSS from 'csstype';

const outsideClicker: CSS.Properties = {
  display: 'inline-block',
};

type OutsidealerterProps = {
  children: React.ReactNode,
  outClick(): React.ReactNode,
};

function useOutsideClicker(ref: RefObject<HTMLDivElement>, outClick) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        outClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

function OutsideClicker({ children, outClick }: OutsidealerterProps): JSX.Element {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(wrapperRef, outClick);
  return <div style={outsideClicker} ref={wrapperRef}>{children}</div>;
}

export default OutsideClicker;
