
loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries => console.log(countries))
}
loadCountries();

