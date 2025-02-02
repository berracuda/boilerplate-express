var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
});


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

/** 2) A first working Express Server */
/*app.get('/', function(req, res){
  res.send('Hello Express');
});*/

/** 3) Serve an HTML file */
app.get('/', function(req, res){
  let absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});

/** 4) Serve static assets  */
app.use(express.static(__dirname+'/public'));

/** 5) serve JSON on a specific route */
/*app.get('/json', function(req, res){
  let obj = {"message": "Hello json"};
  res.json(obj);
});*/
/*app.get('/json', (req, res) => {
  res.json({message: 'Hello json'});
});*/
/*app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});*/
  /*app.get("/json", function(req, res) {
        res.json({"message": "Hello World"});
  });*/

/** 6) Use the .env file to configure the app */
app.get('/json', (req,res) => {
  let obj = {message: process.env.MESSAGE_STYLE == 'uppercase'? 'Hello json'.toUpperCase():'Hello json'};
  res.json(obj);
});
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
