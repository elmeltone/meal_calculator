//Require JS files ------------------------------
var $ = require('jQuery');
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
  dishes: [],
  subtotal: 0
};
var currentDish = 0;
var currentDiner = 0;
var diners = [];
var totalBill = 0;
var dinerBreakdown= {};
var taxRate = 0.05;


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
    $('#submitDiner').show();
    var dishName = $("#selectDish :selected").text();
    var dishCost = $("#selectDish").val();
    var newDish = Object.create(dishObj);
    newDish.id = currentDish;
    newDish.name = dishName;
    newDish.cost = dishCost;
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

function submit() {
  $('#submitDiner').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
    for (var i = 0; i < diners.length; i++) {
      if(diners[i].id == currentDiner){
        $('#dinerBreakdown').append('<li class="dinerName"><br><strong>'+diners[i].name+'</strong></li>');
        for (var j = 0; j < diners[i].dishes.length; j++) {
          $('#totalBill').append('<li>'+diners[i].dishes[j].cost+' - '+diners[i].dishes[j].name+'</li>');
          var dishCost = (parseInt((diners[i].dishes[j].cost)*100))/100;
          totalBill += dishCost;
          diners[i].subtotal += dishCost;
          $('#dinerBreakdown').append('<li>'+diners[i].dishes[j].cost+' - '+diners[i].dishes[j].name+'</li>');
        }
        var dinerSubtotalString = (diners[i].subtotal).toFixed(2);
        $('#dinerBreakdown').append('<li class="subtotalDiner">'+dinerSubtotalString+' - Subtotal</li>');
      }
    }
    console.log(diners);
    console.log(totalBill);
    var totalBillString = (totalBill).toFixed(2);
    var salesTax = totalBill*taxRate;
    var taxDue = Math.round((salesTax*100))/100;
    var taxDueString = (taxDue).toFixed(2);
    var afterTax = (totalBill+taxDue);
    var afterTaxString = (afterTax).toFixed(2);
    currentDiner++;
    $('#dinerName, #dinerPreview').empty();
    $('#selectDish, #submitDiner, #newDish').hide();
    $('#diner').show();
    $('#subtotalGross').text(totalBillString+' - Subtotal');
    $('#tax').text(taxDueString+' - Tax');
    $('#afterTax').text(afterTaxString+' - TOTAL');
  });
};

function calcTT() {
  $('#calcTT').on('click', function() {
    $('#dinerBreakdown').empty();
    for (var i = 0; i < diners.length; i++) {
      $('#dinerBreakdown').append('<li class="dinerName"><br><strong>'+diners[i].name+'</strong></li>');
      for (var j = 0; j < diners[i].dishes.length; j++) {
        $('#dinerBreakdown').append('<li>'+diners[i].dishes[j].cost+' - '+diners[i].dishes[j].name+'</li>');
      };
      var totalBillString = (totalBill).toFixed(2);
      var salesTax = totalBill*taxRate;
      var taxDue = Math.round((salesTax*100))/100;
      var taxDueString = (taxDue).toFixed(2);
      var afterTax = (totalBill+taxDue);
      var afterTaxString = (afterTax).toFixed(2);
      var dinerSubtotalString = (diners[i].subtotal).toFixed(2);
      $('#dinerBreakdown').append('<li class="subtotalDiner">'+dinerSubtotalString+' - Subtotal</li>');
      var taxSplit = parseInt(((diners[i].subtotal)*taxRate)*100)/100;
      var taxSplitString = (taxSplit).toFixed(2);
      $('#dinerBreakdown').append('<li class="taxDiner">'+taxSplitString+' - Tax</li>');
      var tipSplit = parseInt(((diners[i].subtotal)*0.2)*100)/100;
      var tipSplitString = (tipSplit).toFixed(2);
      $('#dinerBreakdown').append('<li class="tipDiner">'+tipSplitString+' - Tip</li>');
      var dinerTotal = diners[i].subtotal+taxSplit+tipSplit;
      var dinerTotalString = (dinerTotal).toFixed(2);
      $('#dinerBreakdown').append('<li class="totalDiner">'+dinerTotalString+' - Diner Total</li>');
    }
  })
};



//Document Ready --------------------------------
$(function() {

$('#newDiner, #selectDish, #submitDiner, #newDish').hide();
addName();

//Select json menu items from dropdown
var select = document.getElementById('selectDish');
for(var i = 0; i < menu.length; i++) {
  var obj = document.createElement("option");
  obj.textContent = menu[i].dish;;
  obj.value = menu[i].price;
  select.appendChild(obj);
};

addDish();
submit();
calcTT();

//Use "enter" key for new item
$('#diner').on('keydown', (function(event) {
  if(event.keyCode === 13){
    event.preventDefault();
    $('#newDiner').click();
  };
}));

});
