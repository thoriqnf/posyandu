'use strict'

// requires
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const session = require('express-session');

const app = express();



// set view engine
app.set('view engine', 'ejs');



// app.use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended : true} ));



// routing
const index    = require('./routers/index');
<<<<<<< HEAD
const parents  = require('./routers/parents');
const officers = require('./routers/officers')


app.use('/', index)
app.use('/parents', parents)
app.use('/officers', officers)
=======
// const parents  = require('./routers/parents');
// const officers = require('/routers/parents')


app.use('/', index)
>>>>>>> 04d2cef6cbd5c54727abbcd3b9a53b3ccf580341



app.listen(3000, () => {
  console.log('listening on port 3000...');
})

// app.listen(process.env.PORT || 3000);
