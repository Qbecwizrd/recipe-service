const express = require('express');

const router = express.Router();

const {getAllRecipe,createRecipe} = require('../controllers/recipeController');

router.get('/',getAllRecipe)
router.post('/',createRecipe)


module.exports = router;

