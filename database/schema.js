var pg = require('pg');
var connectionString = "postgres://ubuntu:Abcd1234@localhost/marketplace";

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

// Connect to database
// $ psql marketplace

// List tables in database
// > \dt

// Show data in table
// > Select * From items;
