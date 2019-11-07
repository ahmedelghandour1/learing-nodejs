const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`))
app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');
    res.send({
        name: 'ahmed',
        likes: [2321, 2321, 3214124]
    })
})
app.get('/about', (req, res) => {
    // res.send('About page')
    res.render('about.hbs', {
        title: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMesssage: 'Unable to handle request'
    })
})
app.listen(3000, () => {
    console.log('server is up')
});