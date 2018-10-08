var express = require('express');
var router = express.Router();
const knex = require('../db/connection');


router.get('/', function (request, response, next) {
  knex('author')
    .then(authors => {
      response.json(authors)

    })


});

module.exports = router;
