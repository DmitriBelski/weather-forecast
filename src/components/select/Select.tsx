import React from 'react';
import Scrollpicker from '../scrollpicker/Scrollpicker';

function Select(): JSX.Element {
  return (
    <div className="select">
      <div className="select__input body select__input--open">
        <span className="body-font">Select City</span>
        <img className="select__bottomarrow" alt="" />
      </div>

      <div className="select__dropdown select__dropdown--open">
        <Scrollpicker />
      </div>
    </div>
  );
}

export default Select;
