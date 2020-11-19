const keys = require('../config/keys');
const axios = require('axios');
const _ = require('lodash');
const CircularJSON = require('circular-json');


module.exports = (app) => {
    /*
    have to test what happens when ingredientList or cuisine or something is undefined, what does the first req give us
    */

    app.get('/search', async (req, res) => {
        console.log("endpoint working");
        console.log(req.query); // will get the following from frontend like this
        /*
        Frontend for filters 
        1. maxReadyTime
        2. diet
        3. cuisine
        4. includeIngredients

        Frontend for signature recipes 
        1. Chicken
        2. Indian
        3. Vegetarian
        4. Beef
        5. Asian
        */

        let ingredientList = ""; // if undefined set to ""
        let cuisine = "Indian"; // if undefined set to ""
        let maxReadyTime = "1000"; // need to set this to "1000" if undefined
        let diet = ""; // if undefined set to ""

        let ingredientSearchUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientList}&diet=${diet}&maxReadyTime=${maxReadyTime}&number=10&ignorePantry=true&cuisine=${cuisine}&apiKey=${keys.spoonacularKey}`;

        var recipeArray = [];
        try {
            const ingredientSearchResult = await axios({
                method: 'get',
                url: ingredientSearchUrl
            }); 
            console.log("first recipe search running");
            console.log(ingredientSearchResult.data.results);
            recipeArray = ingredientSearchResult.data.results.map(info => {
                return info.id;
            });
        } catch (err) {
            console.log("error in first recipe search ", err);
        }

        console.log(recipeArray);

        // if we get less than 5 recipes from our first API call, then return recipes including only the ingredients and not the specific parameters
        var secondRecipeArray = [];
        if (recipeArray.length < 5) {
            let ingredients = "Beef,Onion";
            let ingredientUrl = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&ignorePantry=true&apiKey=${keys.spoonacularKey}`;

            try {
                const ingredientResult = await axios({
                    method: 'get',
                    url: ingredientUrl
                }); 
                console.log("second recipe search running");
                console.log(ingredientResult.data);
                secondRecipeArray = ingredientResult.data.map(info => {
                    return info.id;
                });
            } catch (err) {
                console.log("error in second recipe search ", err);
            }
        } 

        var finalRecipeArray = recipeArray.concat(secondRecipeArray);
        console.log(finalRecipeArray);

        let ids = "829274,184747"; // to get from finalRecipeArray -> have to make a string like this
        try {
            let recipeInfoUrl = `https://api.spoonacular.com/recipes/informationBulk?includeNutrition=false&apiKey=${keys.spoonacularKey}&ids=${ids}`;
            const recipeData = await axios({
                method: 'get',
                url: recipeInfoUrl
            });
            res.send(CircularJSON.stringify(recipeData.data));
        } catch (err) {
           console.log("error in finding recipe information ", err);
        }

    });
}


        /* 
        2nd way - how to make api calls for each element in an array
        let toSend = [];
        const promises = _.forEach(recipeArray, async (recipeId) => {
            let recipeInfoUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${keys.spoonacularKey}`;
            try {
                const recipeData = await axios({
                    method: 'get',
                    url: recipeInfoUrl
                });
                return recipeData;
            } catch (err) {
                console.log("error", err);
            }
        })

        console.log(promises);

        Promise.all(promises)
            .then((vals) => {
                vals.forEach(res => {
                    if (res) {
                        console.log(res);
                    }
                });
                res.send(vals);
            })
            .catch(err => console.log(err));

        */ 
