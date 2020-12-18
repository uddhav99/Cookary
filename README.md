# Cookary
 Our app aims to allow hungry people to quickly find recipes by inputting ingredients and filters or browsing signature recipes! The main aim of our app is to allow users to find recipes based on a set of criteria such as what ingredients they have in hand, what cuisine they want to eat, and how long the recipe should take. The idea is that, instead of having users go to a shop to get new ingredients for a recipe, they can just find recipes that use exactly what they have on hand.
## Local Usage 
The application currently works in development mode by simply booting up a Node.js server. After cloning the repository, follow these steps to get it running yourself -:
Clone the repo and install the dependencies.
```
$ git clone https://github.com/uddhav99/Cookary.git
$ cd Cookary
$ npm install
$ cd frontend
$ npm install
```
Once you install all the dependencies, you will have to do the following steps to Add the API keys 
```
* Go to your favourite code editor (VisualStudio Code, Sublime text etc)
* Create a 'config' folder in the main directory
* Create a new file called keys.js
* Add the API keys for the following (names mentioned in parenthesis)
  - Spoonacular API KEY (spoonacularKey - Go to https://spoonacular.com/food-api/console#Dashboard and sign up to get your own API Key) 

```
Example structure of keys.js file
```
module.exports = {
    spoonacularKey: 'YOUR_API_KEY'
};
```
After all the dependencies are installed and the API keys are added you can start the server
```
$ npm run server
$ cd frontend 
$ npm run serve
$ Go to http://localhost:8080/
```
## Production Usage
The app is currently being beta-tested, and will soon be released!

## Technologies
- Front-end: Vue.js, JavaScript, HTML5/CSS3, Bootstrap
- Back-end: Node.js, Express.js
- API's - Spoonacular API Key 
