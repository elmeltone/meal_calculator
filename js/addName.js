var $ = require('jQuery');

var addName = function() {
  $('#newDiner').on('click', (function(event) {
    event.preventDefault();
    console.log('name adding');

    /*var inputArea = document.getElementById('diner')
    var inputValue = inputArea.value;

    if (!$('#diner').val()) {
      alert('Please type a name.');
    } else {
      $('#dinerName').append(inputValue);

    document.getElementById('diner', 'newDiner').hide;
    };*/
  }));
};

module.exports = addName;
