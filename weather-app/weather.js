const request = require('request');

const key = '81475285e87f838d96e23a2488560665';
const getWeather = (lat, lng, results, error) => {
    request(`https://api.darksky.net/forecast/${key}/${lat},${lng}`, {
        json: true
    }, (err, resp, body) => {
        if(err)  error({msg: 'Server error', err})
        else if (resp.statusCode === 400) error({msg: 'Unable to fetch weather'});
        else if(resp.statusCode === 200) results({temp: body.currently.temperature})
    })
}


module.exports = {getWeather};