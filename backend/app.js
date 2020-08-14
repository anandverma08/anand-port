
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Recommendation = require('./models/recommendation');


const url = "mongodb+srv://Anand:anandPort@anandport.gszay.mongodb.net/anandPort?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to server!")
  }).catch((err) => {
    console.log("Error in connecting", err);
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  next();
});

app.get('',(req,res)=>{
  res.status(200).json({
    message: "Its working"
  })
})

app.post('/api/recommendation', (req, res) => {
  const recommendation = new Recommendation({
    displayName: req.body.displayName,
    photoURL: req.body.photoURL,
    recommendationText: req.body.recommendationText,
    relation: req.body.relation,
    company: req.body.company,
    linkedIn : req.body.linkedIn
  });
  recommendation.save().then(() => {
    res.status(201).json({
      message: "Post Created"
    })
  });

});


app.get('/api/recommendation', (req, res) => {
  Recommendation.find().then((results) => {
    res.status(200).json({
      results: results
    })
  })

});

module.exports = app;
