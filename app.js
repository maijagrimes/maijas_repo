const express = require('express');
const { create } = require('express-handlebars');

const app = express();

// Create Handlebars instance
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    helpers: {
        ifEquals: function (a, b, options) {
            return a === b ? options.fn(this) : options.inverse(this);
        }
    }
});

// Register Handlebars engine
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

// ROUTES
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome!', layout: "drawer"});
});

app.get('/profile', (req, res) => {
    res.render('profile', {layout: "main", active: "profile"});
});

app.get('/record', (req, res) => {
    res.render('record', {layout: "main", active: "record"});
});

app.get('/evidence', (req, res) => {
    res.render('evidence', {layout: "main", active: "evidence"});
});

app.get('/missions', (req, res) => {
    res.render('missions', {layout: "main", active: "missions"});
});

app.get('/accomplices', (req, res) => {
    res.render('accomplices', {layout: "main", active: "accomplices"});
});

// START SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});