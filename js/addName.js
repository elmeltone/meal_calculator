var $ = require('jQuery');

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

module.exports = addName;
