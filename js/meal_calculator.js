//Require JS files ------------------------------
var $ = require('jQuery');
//var addName = require('./addName');
//var addDish = require('./addDish');
//var submit = require('./submit');
var menu = require('./menu');


//Objects ---------------------------------------
var dishObj = {
  name: "",
  cost: ""
};
var diner = [];
var queue = [];
var totalBill = {};
var dinerBreakdown= {};


//Functions -------------------------------------
function addName() {
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

function addDish() {
  $('#selectDish').on('change', function(event){
    event.preventDefault();
    console.log('dish adding');
    $('#submitDiner').show();
  });

  $('#newDish').on('click', function(event){
    event.preventDefault();
    console.log('addddddddd');
    var dishName = $("#selectDish :selected").text();
    var dishCost = $("#selectDish").val();
    var newDish = Object.create(dishObj);
    newDish.name = dishName;
    newDish.cost = dishCost;
    queue[0].push(newDish);
    $('#dinerPreview').append('<li><span class="delete">X  </span>'+
      dishCost+' - '+dishName+'</li>');
    $('#selectDish').find($('option')).attr('selected', false);
  });

  $(document).on('click', ".delete", function(event){
    event.preventDefault();
    console.log('delete');
    queue[0].pop();
    console.log(queue);
    $(this).parent('li').remove();
  });
};

var submit = function() {
  $('#submitDiner').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
    var submitDiner = queue[0];
    submitDiner.forEach(function(i) {
      $('#totalBill').append('<li>'+i.cost+' - '+i.name+'</li>');
      $('#dinerBreakdown').append('<li>'+i+'<br>'+i.cost+' - '+i.name+'</li>')
    })
    //var dinerName = $('#dinerName').text();
    //var dinerBill = $('#dinerPreview').text();
    //$('#totalBill').append(dinerBill);
    //$('#dinerBreakdown').append('--'+dinerName+':<br>'+dinerBill);
    queue.pop();
    $('#dinerName, #dinerPreview').empty();
    $('#selectDish, #submitDiner, #newDish').hide();
    $('#diner, #newDiner').show();
  });
};



//Document Ready --------------------------------
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
