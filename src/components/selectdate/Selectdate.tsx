import React from 'react';
import Scrollpicker from '../scrollpicker/Scrollpicker';

function Selectdate(): JSX.Element {
  return (
    <div className="selectdate">
      <div className="selectdate__input body selectdate__input--open">
        <span className="body-font">Select Date</span>
        <div className="selectdate__calendar selectdate__calendar--open" />
      </div>

      <div className="selectdate__dropdown selectdate__dropdown--open">
        <Scrollpicker />
        <Scrollpicker />
        <Scrollpicker />
      </div>
    </div>
  );
}

export default Selectdate;
