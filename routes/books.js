var express = require('express');
var router = express.Router();
const knex = require('../db/connection');


router.get('/', function (request, response, next) {
  knex('book')
    .then(books => {
      // console.log(authors)
      response.json(books)

    })


});

module.exports = router;
