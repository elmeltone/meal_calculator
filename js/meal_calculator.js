//Require JS files
var $ = require('jQuery');
var addName = require('./addName');
var addDish = require('./addDish');
var submit = require('./submit');
var menu = require('./menu');

//Objects
/*var diner = {
  name:
};
var totalBill={};
var dinerBreakdown={};*/


//Document Ready
$(function() {

addName();

/* Use "enter" key for new item */
$('#diner').on('keydown', (function(event) {
  if(event.keyCode === 13){
    event.preventDefault();
    $('#newDiner').click();
  };
}));

});
