const express = require('express');

require('dotenv').config();

const cors = require('cors');

const router = require('./app/router');

const multer = require('multer');
const bodyParser = multer();



const app = express()
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended : true}));
// on utlise .none() pour dire qu'on attends pas de fichier, uniquement des inputs "classiques" !
app.use( bodyParser.none() );
app.use(cors('*'));
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
