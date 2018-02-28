const countries = require('./dataModels/countries.js')
const url = "http://restcountries.eu/rest/v2/all"

const main = function()  {
  countries.get(url, callback);
}

const callback = function(result) {
  countries.setUpCountries(result);
  console.log(countries.all);
}



document.addEventListener('DOMContentLoaded', main)
