
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => showCountries(countries))
}
loadCountries();
const showCountries = (countries) => {
    console.log(countries);
    //     for (const country of countries) {
    //         console.log(country.name.common);
    //     }
    const countryDiv = document.getElementById('countries')
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h2>${country.name.common}</h2>
        <p>${country.capital}</p>
        <button onclick="showDetails('${country.name.common}')">Show Details</button>
        `;
        countryDiv.appendChild(div);
    });
}

const showDetails = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    //console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountry(data[0]))
}
const displayCountry = country => {
    console.log(country);
    const detailsDiv = document.getElementById('country-detais');
    detailsDiv.innerHTML =
        `<h2>Country: ${country.name}</h2>
        <p> Area: ${country.area}</p>
        <img width="200px" src="${country.flag}">
   `;
}

