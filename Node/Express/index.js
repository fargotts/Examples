const express = require("express");
const path = require("path")
const app = express();
const morgan = require('morgan');

const indexRouter = require('./routes/IndexRoute')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log('Hello buddy')
    next();
})

app.use('/', indexRouter);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));