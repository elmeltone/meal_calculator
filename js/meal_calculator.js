//Require JS files
var $ = require('jQuery');
var addName = require('./addName');
var addDish = require('./addDish');
var submit = require('./submit');
var menu = require('./menu');


//Objects
var dish = {
  name: "name",
  cost: "cost"
};

var diner = [];

var queue = [];

var totalBill = {};

var dinerBreakdown= {};


//Functions
var addName = function() {
  $('#newDiner').on('click', function(event) {
    event.preventDefault();
    console.log('name adding');

    var inputValue = $('#diner').val();

    if (!$('#diner').val()) {
      alert('Please type a name.');
    } else {
      $('#dinerName').append('<li><span class="remove">X  </span>'+inputValue+'</li>');
      inputValue = Object.create(diner);
      queue.push(inputValue);

      $('#diner, #newDiner').hide();
      $('#selectDish').show();
      $('#newDish').show();
      $('#diner').val('');
      }
  });

  $(document).on('click', ".remove", function(event){
    event.preventDefault();
    console.log('remove');
    queue.pop(inputValue);
    $(this).parent('li').remove();
    $('#diner, #newDiner').show();
    $('#selectDish').hide();
    $('#newDish').hide();
    $('#diner').val('');
  });
};

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
