const recipe = require('../models/Recipe')

// GET /recipe

const getAllRecipe = async (req,res) => {
    try{
        const recipes = await recipe.find();
        res.json(recipes);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:'Server Crashed'})
    }
};


// POST /recipes
const createRecipe = async (req,res) => {
    try{
        //getting the recipe
        const { title, ingredients, instructions, tags, author } = req.body;

        //creating the new recipe
        const newRecipe = new recipe({ title, ingredients, instructions, tags, author });

        // saving the new recipe
        await newRecipe.save()

        // sending the new recipe
        res.status(201).json(newRecipe);

    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'Server Crashed'});
    }
};


module.exports = {
    getAllRecipe,
    createRecipe
};
