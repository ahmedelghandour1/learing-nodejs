const express = require('express');
const port = process.env.PORT || 3000;
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes.home);
app.use('/about', routes.about);
app.use('/features', routes.features);
app.use('/pricing', routes.pricing);



app.listen(port, () => {
    console.log('server is upp');
});



function logs(req) {
    //logs here.
}