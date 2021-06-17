import React, { useState, useEffect, useMemo } from 'react';
import Title from './components/title/Title';
import Placeholder from './components/placeholder/Placeholder';
import Card from './components/card/Card';
import Slider from './components/slider/Slider';
import Selectcity from './components/selectcity/Selectcity';
import Selectdate from './components/selectdate/Selectdate';
import { IForecast, ISelectItem } from './utils/interfaces';

interface ICity {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

function App(): JSX.Element {
  const key = '40e04da9c5aabaa94f2c9c89aeeb4578';

  const [cityNames, setCityNames] = useState<ISelectItem[]>([]);
  const [dailyCity, setDailyCity] = useState<string>('');
  const [rawDailyForecast, setRawDailyForecast] = useState<any>({});
  const [inpastCity, setInpastCity] = useState<string>('');
  const [inpastDate, setInpastDate] = useState<string>('');
  const [rawInpastForecast, setRawInpastForecast] = useState<any>({});
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [sliderValue, setSliderValue] = useState<number>(0);

  const [dailyForecast, setDailyForecast] = useState<IForecast[]>([]);
  const [inpastForecast, setInpastForecast] = useState<IForecast>();

  const [inpastForecastMessage, setInpastForecastMessage] = useState<string>('');

  const cities = useMemo<ICity[]>(() => [
    {
      id: 1, name: 'Самара', lat: 53.195873, lon: 50.100193,
    },
    {
      id: 2, name: 'Тольятти', lat: 53.507836, lon: 49.420393,
    },
    {
      id: 3, name: 'Саратов', lat: 51.533557, lon: 46.034257,
    },
    {
      id: 4, name: 'Казань', lat: 55.796127, lon: 49.106405,
    },
    {
      id: 5, name: 'Краснодар', lat: 45.035470, lon: 38.975313,
    },
  ],
  []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const citiesArray: ISelectItem[] = [];
    cities.map((item: ICity) => citiesArray.push({ id: item.id, item: item.name }));
    setCityNames(citiesArray);

    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    const city = cities.find((item) => item.name === dailyCity);
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&units=metric&exclude=alerts,current,minutely,hourly&appid=${key}`)
        .then((response) => response.json())
        .then((json) => setRawDailyForecast(json));
    }
  }, [dailyCity]);

  useEffect(() => {
    if (rawDailyForecast.daily) {
      const result = [] as IForecast[];
      for (let i = 1; i <= 7; i += 1) {
        const unixTimestamp = rawDailyForecast.daily[i].dt;
        const date = new Date(unixTimestamp * 1000);
        const day = date.getUTCDate();
        const month = date.getUTCMonth() + 1;
        const year = date.getUTCFullYear();
        const temp = rawDailyForecast.daily[i].temp.day;
        const { icon } = rawDailyForecast.daily[i].weather[0];
        result.push({
          day, month, year, temp, icon,
        });
      }
      setDailyForecast(result);
    }
  }, [rawDailyForecast]);

  function fetchRequestHandler(req) {
    if (req.cod === '400') {
      setInpastForecastMessage(req.message);
    } else {
      setInpastForecastMessage('');
      setRawInpastForecast(req);
    }
  }

  useEffect(() => {
    if (inpastCity && inpastDate) {
      const city = cities.find((item) => item.name === inpastCity);
      const dateStringArr: string[] = inpastDate.split('/');
      const dateArr: number[] = dateStringArr.map((item: string) => Number.parseInt(item, 10));
      const unixTimestamp = Math.floor((new Date(dateArr[2], dateArr[1] - 1, dateArr[0]))
        .getTime() / 1000);
      fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${city?.lat}&lon=${city?.lon}&units=metric&dt=${unixTimestamp}&appid=${key}`)
        .then((response) => response.json())
        .then((json) => fetchRequestHandler(json));
    }
  }, [inpastCity, inpastDate]);

  useEffect(() => {
    if (rawInpastForecast.current) {
      const unixTimestamp = rawInpastForecast.current.dt;
      const date = new Date(unixTimestamp * 1000);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      const { temp } = rawInpastForecast.current;
      const { icon } = rawInpastForecast.current.weather[0];
      const result = {
        day, month, year, temp, icon,
      };
      setInpastForecast(result);
    }
  }, [rawInpastForecast]);

  return (
    <div className="wrapper">
      <Title />
      <main>

        <div className="container container-top">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>7 Days Forecast</h1>
          <div style={{ marginBottom: '54px' }}>
            <Selectcity setCity={setDailyCity} items={cityNames} />
          </div>
          { dailyForecast.length ? <Slider windowWidth={windowWidth} slider={sliderValue} data={dailyForecast} count={windowWidth <= 768 ? 7 : 3} /> : <Placeholder message="" /> }
          { dailyForecast.length ? <input onChange={handleSliderChange} className="input-range" type="range" /> : <></> }

        </div>

        <div className="container">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>
            Forecast for a Date in the Past
          </h1>
          <div className="selectwrapper">
            <Selectcity setCity={setInpastCity} items={cityNames} />
            <Selectdate setDate={setInpastDate} />
          </div>
          { inpastForecast ? <Card size="big" data={inpastForecast} /> : <Placeholder message={inpastForecastMessage} /> }
        </div>

      </main>
      <footer className="meta-font">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
    </div>
  );
}

export default App;

// function getHttp(url: string, callback: Function) {
//   fetch(url).then((res) => res.json()).then((data) => callback(data));
// }
