import React from 'react';

type CalendarIconProps = {
  opened: boolean,
}

function CalendarIcon({ opened }: CalendarIconProps): JSX.Element {
  return (
    <switch role="navigation" className={`calendaricon calendaricon--${opened ? 'open' : ''}`} />
  );
}

export default CalendarIcon;
