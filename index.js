var cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();
app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/recipeRoutes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
});
