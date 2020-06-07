var express = require('express');
var app = express();

require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

var graphqlHTTP = require('express-graphql');
var schema = require('./src/schemas/userSchema');
var users = require("./src/models/user");
const mongo = require('mongoose');

app.use(express.urlencoded());

app.use(express.json());
mongo.connect('mongodb://developer:dev123@127.0.0.1:27017/newDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongo.connection.once('open', () => {
    console.log('connected to database');
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true
}));

app.get("/users", function(req, res){
  users.find().exec(function(err, leads){
    if(leads.length){
      let objects = leads.map(it => {
        return {
          name: it.name,
          email: it.email
        }
      })
      res.send(objects);
    }else{
      res.send(leads);
    }
  })
})

app.post("/login", function(req, res){
  var login = req.body;
  console.log('LOGIN: ',login);
  users.find(login).limit(1).exec(function(err, leads){
    console.log(leads);
    try{
      if(err)res.status(200).send({success: false, error: 'Login is not valid'});
      else{
        var email = leads[0].email;
        var token = jwt.sign({email}, process.env.SECRET, {
          expiresIn: 300
        })
        console.log(token);
        res.send({success: true, token: token})
      }
    }catch(err)
    {
      res.send({success: false, token: ''})
    }
  });
})

app.post("/signup", function(req, res){
  try{
    users.insertMany([req.body]);
    var email = req.body.email;
    var token = jwt.sign({email}, process.env.SECRET, {
      expiresIn: 300
    })
    res.send({sucess: true, token: token})
  }catch(err){
    res.send({success: false, error: err});
  }
});

app.listen(4000, () => {
  console.log('App listening on port 4000')
})