const express = require('express');
const app = express();
const RecipeRouter = express.Router();

const Recipe = require('../models/Recipe');

RecipeRouter.route('/add').post(function (req, res) {
  const recipe = new Recipe(req.body);
  recipe.save()
    .then(recipe => {
        res.json('Recipe added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

RecipeRouter.route('/').get(function (req, res) {
  Recipe.find(function (err, recipe){
    if(err){
      console.log(err);
    }
    else {
      res.json(recipe);
    }
  });
});

RecipeRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Recipe.findById(id, function (err, recipe){
      res.json(recipe);
  });
});

RecipeRouter.route('/update/:id').post(function (req, res) {
  Recipe.findById(req.params.id, function(err, recipe) {
    if (!recipe)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      recipe.name = req.body.name;
      recipe.port = req.body.port;

      recipe.save().then(recipe => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

RecipeRouter.route('/delete/:id').get(function (req, res) {
console.log("Hello from delete-route!", req.params.id);
  Recipe.findByIdAndRemove({_id: req.params.id},
       function(err, recipe){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = RecipeRouter;