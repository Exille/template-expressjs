const express = require('express');
const router = express.Router();

//Routing
const home = require('./home');

//Router dla Home//###########################################################//
router.route('/')                                                             //
    .post((req, res) =>{ home.post(req, res); })                              //
    .get((req, res) =>{ home.get(req, res); });                               //
//############################################################################//


module.exports = router;