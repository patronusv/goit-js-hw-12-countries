export const createMarkup = countries => {
  if (countries.length === 1) {
    const markup =
      `
    <h2>${countries[0].name}</h2>
<p>${countries[0].capital}</p>
<p>Languages</p>
<ul>` +
      countries[0].languages.reduce((acc, li) => {
        acc += `<li>${li.name}</li>`;
        return acc;
      }, '') +
      `</ul>
<img src="${countries[0].flag}" width=320 alt="${countries[0].name}'s flag">
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
