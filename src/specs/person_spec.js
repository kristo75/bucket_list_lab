const assert = require('assert');
const Person = require('../dataModels/person.js');

describe('Person', function(){

  let person;

  beforeEach('setUp', function(){
    person = new Person();
  })

  it('should start with empty bucketList', function(){
      assert.deepStrictEqual(person.bucketList, []);
  })

  it('should be able to add to bucketList', function(){
    person.addCountryToList("Brazil");
    assert.deepStrictEqual(person.bucketList, ['Brazil'])
  })
})
