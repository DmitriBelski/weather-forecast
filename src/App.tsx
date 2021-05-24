import React, { useState, useEffect, useMemo } from 'react';
import Title from './components/title/Title';
import Placeholder from './components/placeholder/Placeholder';
import Card from './components/card/Card';
import Slider from './components/slider/Slider';
import Select from './components/select/Select';
import Selectdate from './components/selectdate/Selectdate';

interface ICity {
  id: number;
  name: string;
  lat: number;
  lon: number;
}

export interface ISelectItem {
  id: number;
  item: any;
}

function App(): JSX.Element {
  // const key = '40e04da9c5aabaa94f2c9c89aeeb4578';

  const [cityNames, setCityNames] = useState<ISelectItem[]>([]);
  const [dailyCity, setDailyCity] = useState<string>('');

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

  useEffect(() => {
    const citiesArray: ISelectItem[] = [];
    cities.map((item: ICity) => citiesArray.push({ id: item.id, item: item.name }));
    setCityNames(citiesArray);
  }, [cities]);

  useEffect(() => {
    console.log(`dailyCity - ${dailyCity}`);
    // const city = cities.find(item => item.name === dailyCity)
    // if (city) {
    //   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city?.lat}&lon=${city?.lon}&units=metric&exclude=alerts,current,minutely,hourly&appid=${key}`)
    //     .then(response => response.json())
    //     .then(json => setRawDailyForecast(json))
    //     // .then(json =>  console.log(json))
    // }
  }, [dailyCity]);

  return (
    <div className="wrapper">
      <Title />
      <main>

        <div className="container container-top">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>7 Days Forecast</h1>
          <div style={{ marginBottom: '54px' }}>
            <Select initValue="Select city" items={cityNames} setter={setDailyCity} />
          </div>
          {/* <Placeholder /> */}
          <Slider />
          <input className="input-range" type="range" />
        </div>

        <div className="container">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>
            Forecast for a Date in the Past
          </h1>
          <div className="selectwrapper">
            <Select initValue="Select city" items={cityNames} setter={setDailyCity} />
            <Selectdate />
          </div>
          <Placeholder />
          <Card />
        </div>

      </main>
      <footer className="meta-font">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
    </div>
  );
}

export default App;
