const keys = require('../config/keys');
const axios = require('axios');
const _ = require('lodash');
const CircularJSON = require('circular-json');


module.exports = (app) => {
    
    app.get('/api/search', async (req, res) => {
        console.log("endpoint working");

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
        4. Seafood
        5. Beef
        6. Asian
        */

        let ingredientList = "carrots,potatoes,onion"; // needs to be given from the front end -> need to create a string like this
        let cuisine = "";
        let maxReadyTime = "";
        let diet = "";

        let ingredientSearchUrl = `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientList}&maxReadyTime=${maxReadyTime}&diet=${diet}&number=5&ignorePantry=true&cuisine=${cuisine}&apiKey=${keys.spoonacularKey}`;

        try {
            const ingredientSearchResult = await axios({
                method: 'get',
                url: ingredientSearchUrl
            }); 
            console.log(ingredientSearchResult.data.results);
            var recipeArray = ingredientSearchResult.data.results.map(info => {
                return info.id;
            });
        } catch (err) {
            console.log("error in finding recipe ID ", err);
        }

        console.log(recipeArray);

        let ids = "829274,184747"; // to get from fist API Call -> have to make a string like this
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
