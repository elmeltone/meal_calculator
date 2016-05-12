//Require JS files
var $ = require('jQuery');
var addName = require('./addName');
var addDish = require('./addDish');
var submit = require('./submit');
var menu = require('./menu');

//Objects
var diner = {};

var totalBill = {dishes{}, cost{}};

var dinerBreakdown= {diner{dishes{}, cost{}}};



//Document Ready
$(function() {

$('#selectDish').hide();
$('#submitDiner').hide();
$('#newDish').hide();

var select = document.getElementById('selectDish');
for(var i = 0; i < menu.length; i++) {
  var obj = document.createElement("option");
  obj.textContent = menu[i].dish;;
  obj.value = menu[i].price;
  select.appendChild(obj);
};

addName();
addDish();
submit();

/* Use "enter" key for new item */
$('#diner').on('keydown', (function(event) {
  if(event.keyCode === 13){
    event.preventDefault();
    $('#newDiner').click();
  };
}));

});
