import * as _ from 'lodash';
import './styles.css';
import { refs } from './refs/refs.js';
// import { myError } from './components/alert.js';
import fetchCountries from './fetchCountries.js';
import { createMarkup } from './components/create-markup.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
// refs.input.addEventListener(
//   'input',
//   _.debounce(fetchCountries(refs.input.value), 500),
// );

// const fetchCountries = searchQuery => {
//   return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`);
// };
const dataHandler = data => {
  const dataLength = data.length;
  console.log(data);
  if (dataLength > 10) {
    clearMarkup();
    error({
      text:
        'Too many countries found. Please provide a more specific search query',
    });
  } else if (dataLength >= 1 && dataLength <= 10) {
    return data;
  } else {
    clearMarkup();
    error({
      text: 'No country found',
    });
  }
};
const clearMarkup = () => {
  refs.container.innerHTML = '';
};
const updateMarkup = data => {
  const markup = createMarkup(data);
  refs.container.innerHTML = markup;
};
refs.input.addEventListener(
  'input',
  _.debounce(() => {
    if (refs.input.value) {
      fetchCountries(refs.input.value)
        .then(data => dataHandler(data))
        .then(data => updateMarkup(data))
        .catch(error => {
          clearMarkup();
        });
    } else clearMarkup();
  }, 500),
);

// fetch('https://restcountries.eu/rest/v2/name/est');
