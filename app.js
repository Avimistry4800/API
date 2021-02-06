fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
                <h3 class ='country-name'>${country.name}</h3>
                <p class = 'capital-name'>${'Capital :   ' + country.capital}</p>
                <button onClick="displayCountryDetail('${country.name}')" >Shoe Details</button>
                `;
        countryDiv.innerHTML = countryInfo;
        countriesContainer.appendChild(countryDiv);
    });
}
const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country =>{
    console.log(country);
    const countryDiv= document.getElementById('countryDetail');
    countryDiv.innerHTML = `
    <h1>Name : ${country.name}</h1>
    <p>Population : ${country.population}</p>
    <p>Area : ${country.area}</p>
    <img src = "${country.flag}">

    `
}

//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';     

//         const countryInfo = `
//         <h3 class ='country-name'>${country.name}</h3>
//         <p class = 'capital-name'>${'Capital :   ' +country.capital}</p>
//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesContainer.appendChild(countryDiv);

// }