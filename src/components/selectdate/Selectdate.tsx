import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import { Condition } from '../../functions';
import { ISelectItem } from '../../App';
import Scrollpicker from '../scrollpicker/Scrollpicker';

type SelectdateProps = {
  setter(value: any): void
}

function Selectdate({ setter }: SelectdateProps): JSX.Element {
  const firstYear = useMemo<number>(() => 1970, []);

  const months = useMemo<ISelectItem[]>(() => [
    { id: 1, item: 'Jan' },
    { id: 2, item: 'Feb' },
    { id: 3, item: 'Mar' },
    { id: 4, item: 'Apr' },
    { id: 5, item: 'May' },
    { id: 6, item: 'Jun' },
    { id: 7, item: 'Jul' },
    { id: 8, item: 'Aug' },
    { id: 9, item: 'Sept' },
    { id: 10, item: 'Oct' },
    { id: 11, item: 'Nov' },
    { id: 12, item: 'Dec' },
  ], []);

  const years = useMemo<ISelectItem[]>(() => new Array((new Date()).getFullYear() - firstYear + 1)
    .fill('').map((_, i: number) => ({ id: i, item: firstYear + i })), []);

  const [value, setValue] = useState<string>('Select date');
  const [days, setDays] = useState<number[]>([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<string>('');
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const [year, setYear] = useState<number>(0);
  const [fulldate, setFulldate] = useState<string>('');
  const [opened, setOpened] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  function leapYear(yr: number): boolean {
    return ((yr % 4 === 0) && (yr % 100 !== 0)) || (yr % 400 === 0);
  }

  function getMonthNumber(monthName: string): number {
    return months.findIndex((item) => item.item === monthName) + 1;
  }

  useEffect(() => {
    const maxDayNumber = days[monthNumber - 1];
    if (day > maxDayNumber) {
      setDay(maxDayNumber);
    }
  }, [monthNumber]);

  useEffect(() => {
    const newMonthNumber = getMonthNumber(month);
    setMonthNumber(newMonthNumber);
  }, [month]);

  useEffect(() => {
    if (leapYear(year)) {
      setDays([
        ...days.slice(0, 1),
        29,
        ...days.slice(2),
      ]);
    } else {
      setDays([
        ...days.slice(0, 1),
        28,
        ...days.slice(2),
      ]);
    }
  }, [year]);

  useEffect(() => {
    if (day || month || year) {
      setValue(`${day || '..'}/${monthNumber || '..'}/${year || '....'}`);
    }
    if (day && month && year) {
      const maxDayNumber = days[monthNumber - 1];
      if (day > maxDayNumber) {
        setDay(maxDayNumber);
      } else {
        setFulldate(`${day}/${monthNumber}/${year}`);
      }
    }
  }, [day, monthNumber, days]);

  useEffect(() => {
    setter(fulldate);
  }, [fulldate]);

  const generateDays = useCallback(() => new Array(days[(monthNumber || 1) - 1])
    .fill('').map((_, i: number) => ({ id: i, item: i + 1 })), [days, monthNumber]);

  function HoverHandler() {
    return setHovered((prev) => !prev);
  }

  function OpenHandler() {
    setHovered(true);
    return setOpened((prev) => !prev);
  }

  return (
    <div className="selectdate">
      <div className={`selectdate__input body-font ${Condition(opened, 'selectdate__input--open', Condition(hovered, 'selectdate__input--hover', ''))}`} onMouseOver={HoverHandler} onMouseOut={HoverHandler} onFocus={HoverHandler} onBlur={HoverHandler}>
        <span className="body-font">{ value }</span>
        <button type="button" onClick={OpenHandler} onKeyDown={OpenHandler} className={`selectdate__calendar ${Condition(opened, 'selectdate__calendar--open', Condition(hovered, 'selectdate__calendar--hover', ''))}`}>
          <span role="navigation" />
        </button>
      </div>

      <div className={`selectdate__dropdown ${opened ? 'selectdate__dropdown--open' : ''}`}>
        <Scrollpicker getItems={generateDays} setter={setDay} />
        <Scrollpicker itemsArr={months} setter={setMonth} />
        <Scrollpicker itemsArr={years} setter={setYear} />
      </div>
    </div>
  );
}

export default Selectdate;
