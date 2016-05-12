var $ = require('jQuery');

var addDish = function() {
  $('#selectDish').on('change', function(event){
    event.preventDefault();
    console.log('dish adding');
    $('#submitDiner').show();
  });

  $('#newDish').on('click', function(event){
    event.preventDefault();
    console.log('addddddddd');
    $('#selectDish :selected').text().val().appendTo('#dinerPreview');
    $('#selectDish').find('option:first').attr('selected', 'selected');
  })
};

module.exports = addDish;
