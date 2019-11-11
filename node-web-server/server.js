const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
app.use((req, res, next) => {
        next();
})
// app.use((req, resp, next) => {
//     resp.render('maintenance.hbs')
// })

app.use(express.static(`${__dirname}/public`));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('toUpperCase', (txt) => {
    return txt.toUpperCase();
})

app.get('/json', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'ahmed',
        likes: [2321, 2321, 3214124]
    });
});

app.get('/', (req, res) => {
    // res.send('About page')
    const logArr = getReqLog(req);
    fs.appendFileSync(__dirname+'/server.log', JSON.stringify(logArr, 4) + '\n');
    fs.writeFileSync(__dirname+'/server.json', JSON.stringify(logArr) + '\n');
    res.render('home.hbs', {
        title: 'Home Page',
        msg: 'Welcome to our new website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    // res.send('About page')
    res.render('about.hbs', {
        title: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMesssage: 'Unable to handle request'
    });
});

app.listen(3000, () => {
    console.log('server is up')
});




function getReqLog(req) {
    const baseUrl = req.baseUrl;
    const connection = req.connection;
    const cookies = req.cookies;
    const host = req.hostname;
    const ip = req.ip;
    const url = req.url;
    return {
        baseUrl,
        cookies,
        host,
        ip,
        url,
    }
}