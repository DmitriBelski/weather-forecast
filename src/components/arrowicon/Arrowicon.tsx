import React from 'react';

type ArrowIconProps = {
  opened: boolean,
  onClick(): void,
};

function ArrowIcon({ opened, onClick }: ArrowIconProps): JSX.Element {
  return (
    <switch onClick={onClick} className={`arrowicon arrowicon--${opened ? 'top' : 'bottom'}`} />
  );
}

export default ArrowIcon;
