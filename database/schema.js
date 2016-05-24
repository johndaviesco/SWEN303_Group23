var pg = require('pg');
var connectionString = "postgres://dbuser:Abcd1234@localhost/marketplace";

var client = new pg.Client(connectionString);
client.connect();

var query = client.query('CREATE TABLE listings(id SERIAL PRIMARY KEY,'
  +' userid int not null,'
  +' title text not null,'
  +' description text not null,'
  +' category int not null,'
  +' imageurl text not null,'
  +' purchaserid int,'
  +' price decimal(9,2) not null)');

query = client.query('CREATE TABLE m_user(id SERIAL PRIMARY KEY,'
  +' email text not null,'
  +' name text not null)');

query = client.query('CREATE TABLE category(id SERIAL PRIMARY KEY,'
    +' name text not null)');

query.on('end', function() { client.end(); });

// Connect to database
// $ psql marketplace

// List tables in database
// > \dt

// Show data in table
// > Select * From items;

//insert into category(name) values('First Person Shooter');

//drop schema public cascade;
//create schema public;
