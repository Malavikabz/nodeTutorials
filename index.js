const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(bodyParser .urlencoded({extended:true}));

require ('./routes/routes.js')(app);

app.listen(3000);

