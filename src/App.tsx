import React from 'react';
import Title from './components/title/Title';
import Placeholder from './components/placeholder/Placeholder';
import Card from './components/card/Card';
import Slider from './components/slider/Slider';
import Select from './components/select/Select';
import Selectdate from './components/selectdate/Selectdate';

function App(): JSX.Element {
  return (
    <div className="wrapper">
      <Title />
      <main>

        <div className="container container-top">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>7 Days Forecast</h1>
          <div style={{ marginBottom: '54px' }}>
            <Select />
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
            <Select />
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
