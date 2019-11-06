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

// while promises waiting to get data this process called pending.
// when it finish it called settled 
// resolve => fullfield, rejected => rejected
geocode.geocodeAddress(argv.address).then((resp) => {
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    } else {
        const address = resp.data.results[0].formatted_address;
        const lat = resp.data.results[0].geometry.location.lat;
        const lng = resp.data.results[0].geometry.location.lng;
        return weather.getWeather(lat, lng)
    }
}).then((resp) => {
    if (resp.status === 400) {
        throw new Error('Unable to fetch weather');
    } else {
        console.log({
            temp: resp.data.currently.temperature
        })
    }
}).catch((e) => {
    console.log(e);
})