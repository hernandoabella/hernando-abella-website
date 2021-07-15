const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let query = 'london';
const apiKey = '&appid=8fe4e4b12806b45a982605effb769a3b';
const units = '&units=';
let unit = 'metric';
const c = '°C';
const f = '°F';

const displayCity = document.querySelector('#displayCity');
const displayTemp = document.querySelector('#displayTemp');
const displayFeels = document.querySelector('#displayFeels');
const displayUnit = document.querySelector('#displayUnit');

const emoji = document.querySelector('#emoji');

const form = document.querySelector('form');
const city = document.querySelector('#city');
const errorP = document.querySelector('#error');

const resetInput = () => {
  city.value = '';
};

const checkEvent = (e) => {
  if (e) {
    e.preventDefault();
    query = city.value.toLowerCase();
  }
};

const updateCity = (data) => {
  displayCity.textContent = data.name;
};

const checkUnit = (unit) => {
  switch (unit) {
    case 'metric':
      return c;
    case 'imperial':
      return f;
  }
};

const updateTemp = (data) => {
  displayTemp.textContent = data.main.temp + checkUnit(unit);
};

const updateFeels = (data) => {
  displayFeels.textContent = data.main.feels_like + checkUnit(unit);
};

const updateError = (error = '') => {
  errorP.textContent = error;
};

const updateEmoji = (data) => {
  if (data.main.feels_like < 5) {
    emoji.src = 'frozen.png';
  } else if (data.main.feels_like < 10) {
    emoji.src = 'grimace.png';
  } else if (data.main.feels_like < 20) {
    emoji.src = 'happy.png';
  } else if (data.main.feels_like < 30) {
    emoji.src = 'sunglasses.png';
  } else {
    emoji.src = 'hot.png';
  }
};

const updateDOM = (data) => {
  updateCity(data);
  updateTemp(data);
  updateFeels(data);
  updateEmoji(data);
  updateError();
  resetInput();
};

const startThinking = () => {
  displayCity.textContent = 'Thinking...';
  displayTemp.textContent = '';
  displayFeels.textContent = '';
  emoji.src = 'think.png';
};

const getWeather = async (e) => {
  try {
    startThinking();
    checkEvent(e);
    const fullWeatherURL = `${weatherURL}${query}${apiKey}${units}${unit}`;
    const response = await fetch(fullWeatherURL, { mode: 'cors' });
    const data = await response.json();
    if (data.message === 'city not found') {
      throw new Error(data.message);
    }
    updateDOM(data);
  } catch (e) {
    updateError(e);
  }
};

form.addEventListener('submit', getWeather);

getWeather();
