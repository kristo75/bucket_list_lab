const Person = function () {
  this.bucketList = []
}

Person.prototype.addCountryToList = function (countryName){
  this.bucketList.push(countryName);
}

module.exports = Person;
