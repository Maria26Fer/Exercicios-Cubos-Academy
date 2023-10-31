const { Pool } = require('pg')

const pool = new Pool({
	host: 'localhost',
	port: 5432,
	user: 'postgres',
	password: '230926',
	database: 'catalogo_pokemons',
})

module.exports = pool
