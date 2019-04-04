const express = require("express");
var router = express.Router();
const indexController = require('../controllers/indexController');

// @route  GET  /api/v1/getmeals/52850
// @desc   Fetch meals from themealdb api and return mealId with least ingredient
// @access Public
router.get('/getmeals/:mealId',indexController.getmeals);

module.exports = router;