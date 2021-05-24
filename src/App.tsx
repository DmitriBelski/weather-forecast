import React, { useState, useEffect, useMemo } from 'react';
import Title from './components/title/Title';
import Placeholder from './components/placeholder/Placeholder';
import Card from './components/card/Card';
import Slider from './components/slider/Slider';
import Select from './components/select/Select';
import Selectdate from './components/selectdate/Selectdate';

function App(): JSX.Element {
  // const key = '40e04da9c5aabaa94f2c9c89aeeb4578';

  const [cityNames, setCityNames] = useState<string[]>([]);
  const [dailyCity, setDailyCity] = useState<string>('');

  const cities = useMemo(() => [
    { name: 'Самара', lat: 53.195873, lon: 50.100193 },
    { name: 'Тольятти', lat: 53.507836, lon: 49.420393 },
    { name: 'Саратов', lat: 51.533557, lon: 46.034257 },
    { name: 'Казань', lat: 55.796127, lon: 49.106405 },
    { name: 'Краснодар', lat: 45.035470, lon: 38.975313 },
    { name: 'Каменка', lat: 57.38232, lon: 41.79643 },
  ],
  []);

  useEffect(() => {
    const getCityNames = () => {
      const citiesArray: string[] = [] as string[];
      cities.map((item) => citiesArray.push(item.name));
      return citiesArray;
    };
    const citiesArray: string[] = getCityNames();
    setCityNames(citiesArray);
  }, [cities]);

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
