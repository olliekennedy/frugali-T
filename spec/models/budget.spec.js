var mongoose = require('mongoose');
require ('../mongodb_helper.js')
var Budget =  require ('../../model/frugali-TEA')

describe ("budget model", function(){
  beforeEach (function(done){
    mongoose.connection.collection("budget").drop(function(){
      done();
    });
  });
  it("has a category", function(){
    var budget = new Budget({
      bills: "100",
      entertainment: "100",
      travel: "100",
      loans: "100",
      tea: "100",
      hobbies: "100",
      savings: "100"
    });
    expect(budget.bills).toEqual(100);
    expect(budget.entertainment).toEqual(100);
    expect(budget.travel).toEqual(100);
    expect(budget.loans).toEqual(100);
    expect(budget.tea).toEqual(100);
    expect(budget.hobbies).toEqual(100);
    expect(budget.savings).toEqual(100);
  });
})
