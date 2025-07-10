const mongoose = require('mongoose')


const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // List of ingredients
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], // e.g. ['vegan', 'quick']
  },
  author: {
    // type: mongoose.Schema.Types.ObjectId,
    type : String,
    ref: 'User', // reference to User model
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Recipe',recipeSchema)

