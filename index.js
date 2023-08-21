const express = require('express');
var cookieParser = require('cookie-parser')
const app = express();
const port = 3001;
app.use(express.json());
app.use(cookieParser());

app.get('/hello', function(req, res) {
    // if (req.cookie) {
         res.send(`Welcome ${req.cookies.username}!`);
    // } else if (req.cookie) {
    //     res.send(`No username in ${req.cookie.name} found.`);
    // } else {
    //     res.send(`No username cookie found.`);
    // }
  })
  
  app.get('/login', function (req, res, next) {
    // middleware makes the session cookie available and modifiable in the request as the 'session' prop
    
  // define cookie attributes
  var opts = {
    httpOnly: true,
    sameSite: 'strict',
    name: 'New Cookie'
  };

  // add a cookie to the response
    res.cookie('username', 'James', opts);
  
    res.status(200).send("James has been added as a username cookie.");
  })

  app.get('/', function(req, res) {

        res.send(`Welcome to the headquarters!`);
})

  app.listen(port, () => console.log(`The server is running on port ${port}.`));