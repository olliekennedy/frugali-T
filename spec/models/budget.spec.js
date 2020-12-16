var mongoose = require('mongoose');
require ('../mongodb_helper.js')
var Budget =  require ('../../model/frugali-TEA')

describe ("budget model", function(){
  beforeEach (function(done){
    mongoose.connection.collection("budget").drop(function(){
      done();
    });
  });
  //test BudgetSchema
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
  it("it can save allowances",function(){
    var budget = new Budget({
      bills: "100",
      entertainment: "100",
      travel: "100",
      loans: "100",
      tea: "100",
      hobbies: "100",
      savings: "100"
      });
      budget.save(function(err){
        expect(err).toBeNull();
        Budget.find(function(err, budget){
          expect(err).toBeNull();
          expect(budget[0]).toMatchObject({
            bills: "100",
      //      entertainment: "100",
//            travel: "100",
//            loans: "100",
  //          tea: "100",
  //          hobbies: "100",
  //          savings: "100"
          });
        });
      });
  })
})
