var $ = require('jQuery');

var addName = function() {
  $('#newDiner').on('click', function(event) {
    event.preventDefault();
    console.log('name adding');

    var inputValue = $('#diner').val();

    if (!$('#diner').val()) {
      alert('Please type a name.');
    } else {
      $('#dinerName').append(inputValue);

    $('#diner, #newDiner').hide();
    };
  });
};

module.exports = addName;
