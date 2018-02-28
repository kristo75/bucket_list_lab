const countries = require('./dataModels/countries.js')
const ListView = require('./viewModels/listView.js')
const url = "http://restcountries.eu/rest/v2/all"

const main = function()  {
  countries.get(url, callback);
  listView = new ListView(["Brazil", "New Zealand", "Australia"])
}

const callback = function(result) {
  countries.setUpCountries(result);
  console.log(countries.all);
}



document.addEventListener('DOMContentLoaded', main)
