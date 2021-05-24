import React from 'react';
import img from '../../images/placeholder/Academy-Weather-bg160.svg';

type PlaceholderProps = {
  message: string
}

function Placeholder({ message }: PlaceholderProps): JSX.Element {
  return (
    <div className="placeholder">
      <img className="placeholder__img" src={img} alt="Fill in all the fields" />
      <span className="placeholder__text body-bold-font">
        { message || 'Fill in all the fields and the weather will be displayed' }
      </span>
    </div>
  );
}

export default Placeholder;
