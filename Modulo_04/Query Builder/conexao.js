const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : '230926',
    database : 'knexjs'
  }
});

module.exports = knex