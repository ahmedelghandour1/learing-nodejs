const yargs = require('yargs');
const request = require('request');
const geocode = require('./geocode.js');
const weather = require('./weather.js');

const argv = yargs.options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Adress to fech weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
geocode.geocodeAddress(argv.address, (data) => {
    weather.getWeather(data.lat, data.lng, (data) => {
        console.log(data);
    }, (err) => console.log(err))
}, (error) => {
    console.log(error.msg);
});
