const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = (countries) => {

    // for (const country of countries) {
    //     console.log(country);
    // }

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick = "loadCountryByName('${country.name}')">Details</button>`
        // const h3 = document.createElement('h3');  eivabe kora jai + upore innerHTML diyeo kora jai
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);
        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = (name) => {
    const url = `https://restcountries.com/v2/name/${name}`;
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => displayCountryDetail(data[0]));
}

const displayCountryDetail = (country) => {
    console.log(country)
    const countrydiv = document.getElementById('country-details');
    countrydiv.innerHTML = `
        <h5>${country.name}</h5>
        <p>Population: ${country.population}</p>
        <img src = "${country.flag}" width = "200px" />
    `
}