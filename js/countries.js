
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
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        h2.innerText = `Official Name: ${country.name.official}`;
        p.innerText = `capital: ${country.capital}`;
        div.appendChild(h2);
        div.appendChild(p);
        countryDiv.appendChild(div);
    });
}

