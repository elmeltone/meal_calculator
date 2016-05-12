var $ = require('jQuery');

var submit = function() {
  $('#submitDiner').on('click', function(event){
    event.preventDefault();
    console.log('submitting');
  });
};

module.exports = submit;
