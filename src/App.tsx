import React from 'react';
import placeholder from './images/placeholder/Academy-Weather-bg160.svg';
import leftArrow from './images/icons/24/chevron-left.svg';
import rightArrow from './images/icons/24/chevron-right.svg';
import weather from './images/weather-icons/13d.png';
import Title from './components/title/Title';

function App(): JSX.Element {
  return (
    <div className="wrapper">

      <Title />

      <main>
        <div className="container container-top">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>7 Days Forecast</h1>
          <div style={{ marginBottom: '54px' }}>

            <div className="select">
              <div className="select__input body select__input--open">
                <span className="body-font">Select City</span>
                <img className="select__bottomarrow" alt="" />
              </div>

              {/* <div className="select__dropdown select__dropdown--open">
                <div className="scrollpicker__wrapper">
                  <ul className="scrollpicker__list">
                    <li className="scrollpicker__item body-font unselectable">Самара</li>
                    <li className="scrollpicker__item body-font unselectable">Тольятти</li>
                    <li className="scrollpicker__item body-font unselectable">Саратов</li>
                    <li className="scrollpicker__item body-font unselectable">Казань</li>
                    <li className="scrollpicker__item body-font unselectable">Краснодар</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>

          {/* <div className="placeholder">
            <img className="placeholder__img" src={placeholder} alt="Fill in all the fields" />
            <span className="placeholder__text body-bold-font">
              Fill in all the fields and the weather will be displayed
            </span>
          </div> */}

          <div className="slider">
            <img className="slider__left-arrow" src={leftArrow} alt="left arrow" />
            <img className="slider__right-arrow" src={rightArrow} alt="right arrow" />

            <div className="card" style={{ width: '174px' }}>
              <span className="card__date body-bold-font">27 sep 2021</span>
              <img className="card__img" src={weather} alt="storm" />
              <span className="card__tepmerature h1-font">+17°</span>
            </div>
            <div className="card" style={{ width: '174px' }}>
              <span className="card__date body-bold-font">27 sep 2021</span>
              <img className="card__img" src={weather} alt="storm" />
              <span className="card__tepmerature h1-font">+17°</span>
            </div>
            <div className="card" style={{ width: '174px' }}>
              <span className="card__date body-bold-font">27 sep 2021</span>
              <img className="card__img" src={weather} alt="storm" />
              <span className="card__tepmerature h1-font">+17°</span>
            </div>
          </div>
          <input className="input-range" type="range" />
        </div>

        <div className="container">
          <h1 className="h1-font" style={{ marginBottom: '32px' }}>
            Forecast for a Date in the Past
          </h1>
          <div className="selectwrapper">

            <div className="select">
              <div className="select__input body select__input--open">
                <span className="body-font">Select City</span>
                <img className="select__bottomarrow" alt="" />
              </div>

              {/* <div className="select__dropdown select__dropdown--open">
                <div className="scrollpicker__wrapper">
                  <ul className="scrollpicker__list">
                    <li className="scrollpicker__item body-font unselectable">Самара</li>
                    <li className="scrollpicker__item body-font unselectable">Тольятти</li>
                    <li className="scrollpicker__item body-font unselectable">Саратов</li>
                    <li className="scrollpicker__item body-font unselectable">Казань</li>
                    <li className="scrollpicker__item body-font unselectable">Краснодар</li>
                  </ul>
                </div>
              </div> */}
            </div>

            <div className="selectdate">
              <div className="selectdate__input body selectdate__input--open">
                <span className="body-font">Select Date</span>
                <div className="selectdate__calendar selectdate__calendar--open" />
              </div>

              {/* <div className="selectdate__dropdown selectdate__dropdown--open">
                <div className="scrollpicker__wrapper">
                  <ul className="scrollpicker__list">
                    <li className="scrollpicker__item body-font unselectable">11</li>
                    <li className="scrollpicker__item body-font unselectable">12</li>
                    <li className="scrollpicker__item body-font unselectable">13</li>
                    <li className="scrollpicker__item body-font unselectable">14</li>
                    <li className="scrollpicker__item body-font unselectable">15</li>
                    <li className="scrollpicker__item body-font unselectable">16</li>
                  </ul>
                </div>
                <div className="scrollpicker__wrapper">
                  <ul className="scrollpicker__list">
                    <li className="scrollpicker__item body-font unselectable">Jan</li>
                    <li className="scrollpicker__item body-font unselectable">Feb</li>
                    <li className="scrollpicker__item body-font unselectable">Mar</li>
                    <li className="scrollpicker__item body-font unselectable">Apr</li>
                    <li className="scrollpicker__item body-font unselectable">May</li>
                    <li className="scrollpicker__item body-font unselectable">Jun</li>
                  </ul>
                </div>
                <div className="scrollpicker__wrapper">
                  <ul className="scrollpicker__list">
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                    <li className="scrollpicker__item body-font unselectable">2021</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>

          <div className="placeholder">
            <img className="placeholder__img" src={placeholder} alt="Fill in all the fields" />
            <span className="placeholder__text body-bold-font">
              Fill in all the fields and the weather will be displayed
            </span>
          </div>

          {/* <div className="card" style={{ minWidth: '252px' }}>
            <span className="card__date body-bold-font">27 sep 2021</span>
            <img className="card__img" style={{ width: '160px', height: '160px', margin: '-9px 0' }} src={weather} alt="storm" />
            <span className="card__tepmerature h1-font">+17°</span>
          </div> */}
        </div>
      </main>
      <footer className="meta-font">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</footer>
    </div>
  );
}

export default App;
