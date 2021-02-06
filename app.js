fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const name = document.createElement('h3');
        name.innerText = country.name;
        const capital = document.createElement('div');
        capital.innerText = country.capital;

        countryDiv.appendChild(name);
        countryDiv.appendChild(capital);
        countriesContainer.appendChild(countryDiv);
        
        

        // console.log(country.name);        
    }
}