//Require JS files
var $ = require('jQuery');
var addName = require('./addName');
var addDish = require('./addDish');
var submit = require('./submit');

//Objects
var diner = {};
var totalBill={};
var dinerBreakdown={};

//Document Ready
$(function() {
 addName();
});
