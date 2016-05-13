//Require JS files ------------------------------
var $ = require('jQuery');
//var addName = require('./addName');
//var addDish = require('./addDish');
//var submit = require('./submit');
var menu = require('./menu');


//Objects ---------------------------------------
var dishObj = {
  id: "",
  name: "",
  cost: ""
};
var dinerObj = {
  id: "",
  name: "",
  dishes: []
};
var currentDish = 0;
var currentDiner = 0;
var diners = [];
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
      var diner = Object.create(dinerObj);
      diner.id = currentDiner;
      diner.name = inputValue;
      diner.dishes = [];
      diners.push(diner);
      console.log(diners);
      $('#diner, #newDiner').hide();
      $('#selectDish').show();
      $('#newDish').show();
      $('#diner').val('');
      }
  });

  $(document).on('click', ".remove", function(event){
    event.preventDefault();
    console.log('remove');
    diners.pop();
    console.log(diners);
    $(this).parent('li').remove();
    $('#diner, #newDiner').show();
    $('#dinerPreview').text('');
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
    newDish.id = currentDish;
    newDish.name = dishName;
    newDish.cost = dishCost;
    // queue.push(newDish);
    for (var i = 0; i < diners.length; i++) {
      if(diners[i].id == currentDiner){
        diners[i].dishes.push(newDish);
      }
    }

    console.log(diners);
    
    $('#dinerPreview').append('<li><span class="delete" id="'+currentDish+'">X  </span>'+
      dishCost+' - '+dishName+'</li>');
    $('#selectDish').find($('option')).attr('selected', false);
    currentDish++;
  });

  $(document).on('click', ".delete", function(event){
    event.preventDefault();
    console.log('delete');
    // queue.splice(this.index, 1);
    var dish = $(this).attr('id');
    for (var i = 0; i < diners.length; i++) {
      if(diners[i].id == currentDiner){
        for (var j = 0; j < diners[i].dishes.length; j++) {
          if(diners[i].dishes[j].id == dish){
            diners[i].dishes.splice(j,1);
          }
        }
      }
    }
    console.log(diners);
    $(this).parent('li').remove();
  });
};

var submit = function() {
  $('#submitDiner').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
    // console.log(queue);
    for (var i = 0; i < diners.length; i++) {
      if(diners[i].id == currentDiner){
        for (var j = 0; j < diners[i].dishes.length; j++) {
          $('#totalBill').append('<li>'+diners[i].dishes[j].cost+' - '+diners[i].dishes[j].name+'</li>');
          $('#dinerBreakdown').append('<li class="dinerName"><strong>'+diners[i].name+'</strong></li>');
          $('#dinerBreakdown').append('<li>'+diners[i].dishes[j].cost+' - '+diners[i].dishes[j].name+'</li>');
        }
      }
    }
    console.log(diners);
    currentDiner++;

    //var dinerName = $('#dinerName').text();
    //var dinerBill = $('#dinerPreview').text();
    //$('#totalBill').append(dinerBill);
    //$('#dinerBreakdown').append('--'+dinerName+':<br>'+dinerBill);
    
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
