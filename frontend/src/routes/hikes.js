require('dotenv').config();
const express = require('express');
const router = express.Router();
var fetch = require('node-fetch');
const { response } = require('express');
const api = process.env.API_KEY

let lat = '40.0274'
let long = '-105.2519'

router.get('/', (req,res) =>{
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=10&key=${api}`)
    .then(res => res.json())
    .then(data => res.send(data))
})

// (Things to render to the display page from response, 
// id(for saving for model)
// name (for displaying and for model)
// type??? (not sure how relevant)
// difficulty (for display and model(?))
// stars (for display and model(?)
// location (for display and model)
// length (for display and model)
// condition (for display)
// condition details(for display)
// imgsmallMed (for display??)
//)

module.exports = router;