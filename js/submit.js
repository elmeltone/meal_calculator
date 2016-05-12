var $ = require('jQuery');

var submit = function() {
  $('#submitDiner').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
    var dinerName = $('#dinerName').text();
    var dinerBill = $('#dinerPreview').text();
    $('#totalBill').append(dinerBill);
    $('#dinerBreakdown').append('--'+dinerName+':<br>'+dinerBill);
    $('#dinerName, #dinerPreview').empty();
    $('#selectDish, #submitDiner, #newDish').hide();
    $('#diner, #newDiner').show();
  });
};

module.exports = submit;
