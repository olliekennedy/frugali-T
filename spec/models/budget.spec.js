var mongoose = require('mongoose');
require ('../mongodb_helper.js')
var Budget =  require ('../model/frugali_TEA')

describe ("budget model", function(){
  beforeEach (function(done){
    mongoose.connection.collections.budget.drop(function(){
      done();
    });
  });
  
}


)
