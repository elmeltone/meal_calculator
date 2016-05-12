var $ = require('jQuery');

var menu = [
  {
    "id": "1",
    "dish": "Edamame",
    "price": "2"
  }, {
    "id": "2",
    "dish": "Kappa Maki",
    "price": "4"
  }, {
    "id": "3",
    "dish": "Aji",
    "price": "4"
  }, {
    "id": "4",
    "dish": "Maguro Nigiri",
    "price": "4.5"
  }, {
    "id": "5",
    "dish": "Hamachi",
    "price": "5"
  }, {
    "id": "6",
    "dish": "Amaebi",
    "price": "5.5"
  }, {
    "id": "7",
    "dish": "Sashimi",
    "price": "6"
  }, {
    "id": "8",
    "dish": "Toro",
    "price": "6"
  }, {
    "id": "9",
    "dish": "Ebi Nigiri",
    "price": "6"
  }, {
    "id": "10",
    "dish": "Amagoyaki",
    "price": "6.5"
  }, {
    "id": "11",
    "dish": "Uni",
    "price": "7"
  }, {
    "id": "12",
    "dish": "Ikura Gunkan",
    "price": "7"
  }, {
    "id": "13",
    "dish": "Tea",
    "price": "4"
  }, {
    "id": "14",
    "dish": "Sake",
    "price": "8"
  }
];

menu.forEach(function(i) {
  $('.dropdown-content').print('<p class="dishes">' + menu.price + ' - ' + menu.dish + '</p>');
});

module.exports = menu;
