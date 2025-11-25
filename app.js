    const express = require('express');
    const { create } = require('express-handlebars'); // Use create for instances

    const app = express();

    // Create an instance of ExpressHandlebars
    const hbs = handlebars.create({
        //extname: '.handlebars', - Specify the extension name if not using default '.hbs'
        defaultLayout: 'main', // Specify your default layout file
        layoutsDir: __dirname + '/views/layouts/', // Path to your layouts directory
        partialsDir: __dirname + '/views/partials/' // Path to your partials directory
    });

    // Register hbs.engine with the Express app
    app.engine('hbs', hbs.engine);
    app.set('view engine', 'handlebars');
    app.set('views', './views'); // Set the views directory
    app.use(express.static('public'));

    // Define a route to render a Handlebars template
    app.get('/', (req, res) => {
        res.render('index', { title: 'Welcome to Handlebars!', message: 'Hello from Node.js!' });
    });

    app.get('/profile', (req, res) =>
    {
        res.render('profile')
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });