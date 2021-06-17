import React, {
  useState, useEffect, useMemo,
} from 'react';
import { ISelectItem } from '../../App';
import Scrollpicker from '../scrollpicker/Scrollpicker';
import InputBase from '../inputbase/InputBase';
import CalendarIcon from '../calendaricon/Calendaricon';

type SelectdateProps = {
  setDate(city: string): void
}

function Selectdate({ setDate }: SelectdateProps): JSX.Element {
  const firstYear = useMemo<number>(() => 1970, []);

  const [gendays, setGendays] = useState<ISelectItem[]>([]);

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
  const [inputValue, setInputValue] = useState<string>('Select date');
  const [opened, setOpened] = useState<boolean>(false);
  const [days, setDays] = useState<number[]>([31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<string>('');
  const [monthNumber, setMonthNumber] = useState<number>(1);
  const [year, setYear] = useState<number>(0);
  const [fulldate, setFulldate] = useState<string>('');

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
    if (value !== 'Select date') {
      setOpened(!fulldate);
    }
  }, [value]);

  useEffect(() => {
    if (day && month && year) {
      const maxDayNumber = days[monthNumber - 1];
      if (day > maxDayNumber) {
        setDay(maxDayNumber);
      } else {
        setFulldate(`${day}/${monthNumber}/${year}`);
      }
    }
    if (day || month || year) {
      setValue(`${day || '..'}/${monthNumber || '..'}/${year || '....'}`);
    }
  }, [day, monthNumber, days]);

  useEffect(() => {
    setDate(fulldate);
  }, [fulldate]);

  useEffect(() => {
    const generatedDays = new Array(days[(monthNumber || 1) - 1])
      .fill('').map((_, i: number) => ({ id: i, item: i + 1 }));
    setGendays(generatedDays);
  }, [days, monthNumber]);

  return (
    <InputBase
      value={value}
      open={opened}
      extOpenhandler={setOpened}
      changeInput={setInputValue}
      icon={(inputopened) => (
        <CalendarIcon opened={inputopened} />
      )}
    >
      <div className="selectdate__dropdown">
        <Scrollpicker items={gendays} picked={(v) => setDay(parseInt(v, 10))} />
        <Scrollpicker items={months} picked={setMonth} />
        <Scrollpicker items={years} picked={(v) => setYear(parseInt(v, 10))} />
      </div>
    </InputBase>
  );
}

export default Selectdate;
