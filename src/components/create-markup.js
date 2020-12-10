import { refs } from '../refs/refs.js';
const createMarkup = countries => {
  if (countries.length === 1) {
    const markup =
      `
      <h2 class="country-title">${countries[0].name}</h2>
      <div class="content">
      <div class="text-content">     
<p><b>Capital: </b>${countries[0].capital}</p>
<p><b>Population: </b>${countries[0].population}</p>
<p><b>Languages:</b></p>
<ul>` +
      countries[0].languages.reduce((acc, li) => {
        acc += `<li>${li.name}</li>`;
        return acc;
      }, '') +
      `</ul>
      </div>
<img src="${countries[0].flag}" alt="${countries[0].name}'s flag" class="flag-image"></div>
`;
    return markup;
  } else if (countries.length <= 10) {
    const markup =
      `
          <ul>` +
      countries.reduce((acc, li) => {
        acc += `<li>${li.name}</li>`;
        return acc;
      }, '') +
      `</ul>
    `;
    return markup;
  }
};
export const clearMarkup = () => {
  refs.container.innerHTML = '';
};
export const updateMarkup = data => {
  const markup = createMarkup(data);
  refs.container.innerHTML = markup;
};
