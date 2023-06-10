const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const responsesData = require('./test_data/responses');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// handling CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// route for handling requests from the Angular client

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello GEEKS FOR GEEKS Folks from the Express server!' });
});

app.post('/auth/signin', (req, res) => {
  //onsole.log(req);
  if(req.body.username === 'nihartest1' && req.body.password === 'password') {
    console.log("Login Success...");
    res.json(responsesData.login_success);
  } else if(req.body.username === 'nihartest1') {
    console.log("Invalid password");
    res.json(responsesData.login_failed_invalid_password);
  } else {
    res.json(responsesData.login_falied);
  }
});

app.post('/auth/signout', (req, res) => {
  //onsole.log(req);
  console.log("Signout Success...");
  res.header("Content-Type",'application/json');
  res.json({});
});

/* EMAIL CLIENT APIS */
app.get('/api/user/:userid/emails', (req, res) => {
  res.header("Content-Type",'application/json');
  if(req.params['userid'] === 'nihartest1') {
    console.log(responsesData.email_list);
    res.json(responsesData.email_list);
  } else {
    res.json([]);
  }
});

app.get('/api/user/:userid/emails/:id', (req, res) => {
  res.header("Content-Type",'application/json');
  if(req.params['userid'] === 'nihartest1' && req.params['id']) {
    res.json(responsesData.email_details);
  } else {
    res.json({});
  }
});

// PORT

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

function print(...val)
{
  var values = '';
  val.forEach(element => {
    values += element + ' ';
  });
  console.log(values);
}
