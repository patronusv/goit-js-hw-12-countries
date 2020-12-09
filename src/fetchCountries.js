import { refs } from './refs/refs.js';
import { createMarkup } from './components/create-markup.js';
// import { myError } from './components/alert.js';

const fetchCountries = searchQuery => {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(data => data.json())
    .catch(error => console.log(error));
};
export default fetchCountries;
// const dataHandler = data => {
//   const dataLength = data.length;
//   const promise = new Promise((resolve, reject) => {
//     if (dataLength <= 10) {
//       resolve(data);
//     } else reject(data);
//   });
//   console.log(data);
//   return promise;
// };
// const fetchCountries = searchQuery => {
//   if (searchQuery) {
//     fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
//       .then(res => res.json())
//       .then(data => dataHandler(data))
//       .then(data => updateMarkup(data))
//       .catch(() => {
//         clearMarkup();
//         return error({
//           text:
//             'Too many countries found. Please provide a more specific search query',
//         });
//       });
//   } else clearMarkup();
// };
// export default fetchCountries;
// const clearMarkup = () => {
//   refs.container.innerHTML = '';
// };
// const updateMarkup = data => {
//   const markup = createMarkup(data);
//   refs.container.innerHTML = markup;
// };
