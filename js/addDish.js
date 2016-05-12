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
    $('#dinerPreview').append($('#selectDish').val(), " - ", $('#selectDish :selected').text(), "<br>");
    $('#selectDish').find('option:first').attr('selected', 'selected');
  })
};

module.exports = addDish;
