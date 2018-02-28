const main = function()  {

  const requester = require('./helpers/requester.js')
  const urlCountries = "http://restcountries.eu/rest/v2/all"
  requester.get(urlCountries, callback1)
}

const callback1 = function(result) {
  console.log(result);
}



document.addEventListener('DOMContentLoaded', main)
