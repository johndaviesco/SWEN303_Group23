var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var bodyParser = require('body-parser');

var fs = require('fs');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded());
// in latest body-parser use like below.
router.use(bodyParser.urlencoded({ extended: true }));
var connectionString = "postgres://dbuser:Abcd1234@localhost/marketplace";
var client = new pg.Client(connectionString);
client.connect();

//router.use(bodyParser.text({type:'text/html'}));


router.use('/public', express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/sign-in', function(req, res, next) {
  res.render('sign-in', {

  });
});


router.get('/buy', function(req, res, next) {
  res.render('buy', {
  });
});

// asdfasdf
router.get('/listing/:id', function(req, res, next) {
  var results = [];

  var query = client.query("SELECT * FROM listings WHERE id = $1;",[req.params.id]);
  // Stream results back one row at a time
  query.on('row', function(row) {
      results.push(row);
  });
  // After all data is returned, close connection and return results
  query.on('end', function() {
    res.render('listing', results[0]);
  });
});

router.get('/sold/:id', function(req, res, next) {
  var results = [];

  var query = client.query("SELECT * FROM listings WHERE id = $1;",[req.params.id]);
  // Stream results back one row at a time
  query.on('row', function(row) {
      results.push(row);
  });
  // After all data is returned, close connection and return results
  query.on('end', function() {
    res.render('sold', results[0]);
  });
});

router.get('/soldall', function(req, res, next) {
  res.render('soldall');
});

/* sdfgdfg*/
router.get('/create', function(req, res, next) {
  res.render('create');
});

router.get('/createnewlisting', function(req, res, next) {
  res.render('createnewlisting');
});

router.get('/listings', function(req, res, next) {
  res.render('listings');
});

router.get('/productListings', function(req, res, next) {
  var results = [];

  var query = client.query("SELECT * FROM listings ORDER BY id ASC;");

  // Stream results back one row at a time
  query.on('row', function(row) {
      results.push(row);
  });

  // After all data is returned, close connection and return results
  query.on('end', function() {
      return res.json(results);
   });

});

router.get('/productListing:id', function(req, res, next) {
  var results = [];

  var query = client.query("SELECT * FROM listings WHERE id = $1;");

  // Stream results back one row at a time
  query.on('row', function(row) {
      results.push(row);
  });

  // After all data is returned, close connection and return results
  query.on('end', function() {
      return res.json(results);
   });
});
/* sdtytyjfugy */
router.post('/sign-in', function(req, res, next) {
  var results = [];

  var data = {email: req.body.email,name: req.body.name};
  // console.log(data.email);
  // console.log(data.name);

  // Pipe to database insert
  //code 1
  client.query("INSERT INTO m_user(email, name) values($1, $2) Returning *",
    [data.email,
      data.name,
    ], function(err, res) {
        if(err){
          return console.error(err);
        }
    });
    var query = client.query("SELECT id FROM m_user WHERE email = $1;",[data.email]);
    // Stream results back one row at a time
    query.on('row', function(row) {
        results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', function() {
        return res.json(results);
    });
});

/* sdtytyjfugy */
router.post('/createnewlisting', function(req, res, next) {
  // Parse/validate (optional) form data
  // userid = req.forms[0]['userID']

  console.log(req.body);
  // Pipe to database insert
  //code 1
  client.query("INSERT INTO listings(userid, title, category, description, imageurl, price) values($1, $2, $3, $4, $5, $6) Returning *",
    [2,
      req.body.title,
      req.body.category,
      req.body.description,
      req.body.image,
      req.body.price
    ], function(err, res) {
        if(err){
          return console.error(err);
        }
    });

    res.render('createnewlisting');
    res.end();


});

//s dfndnlk
router.get('/category/:id', function(req, res, next) {
  id = req.params.id;

  // Do pre-fetch work

  // Do category database pull

  // Do listings database pull

  // Process data for view

  // Pipe data to view
  res.render('category', {
    //name: ?,
    //listings: arr?
  });
});

module.exports = router;
