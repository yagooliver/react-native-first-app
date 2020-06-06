var express = require('express');
var app = express();
var graphqlHTTP = require('express-graphql');
var schema = require('./src/schemas/userSchema');
var users = require("./src/models/user");
const mongo = require('mongoose');

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// app.use('/graphql', graphqlHTTP())
mongo.connect('mongodb://developer:dev123@127.0.0.1:27017/newDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongo.connection.once('open', () => {
    console.log('connected to database');
})
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql : true //enables graphiql in browser for querying
}));

app.get("/users", function(req, res){
  users.findOne(req.query).exec(function(err, leads){
    res.send(leads);
  })
})

app.post("/signup", function(req, res){
  //var body = JSON.parse(JSON.stringify(req.query));
  users.insertMany([req.body]);
  res.send("Ok");
});

app.listen(4000, () => {
  console.log('App listening on port 4000')
})