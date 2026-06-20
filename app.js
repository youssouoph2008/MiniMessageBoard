//Message Board webappp

const express = require('express');
const path = require('path');

const app = express();
const indexRouter = require('./routes/index');

/* Middleware to read the messages*/
app.use(express.urlencoded({ extended: true }));

/* Set up the view engine and views directory(ejs) */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);

//Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});