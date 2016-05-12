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
    $('#dinerPreview').append('<li><span class="delete">X  </span>'+
      $("#selectDish").val()+' - '+$("#selectDish :selected").text()+'</li>');
    $('#selectDish').find($('option')).attr('selected', false);
  });

  $(document).on('click', ".delete", function(event){
    event.preventDefault();
    console.log('delete');
    $(this).parent('li').remove();
  });
};

module.exports = addDish;
