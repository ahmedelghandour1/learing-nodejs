const request = require('request');
const axios = require('axios').default;

const key = '81475285e87f838d96e23a2488560665';
const getWeather = (lat, lng) => {
    return axios.get(`https://api.darksky.net/forecast/${key}/${lat},${lng}`);
}


module.exports = {
    getWeather
};
// return new Promise((resolve, reject) => {
//     request(`https://api.darksky.net/forecast/${key}/${lat},${lng}`, {
//         json: true
//     }, (err, resp, body) => {
//         if (err) reject({
//             msg: 'Server error',
//             err
//         })
//         else if (resp.statusCode === 400) reject({
//             msg: 'Unable to fetch weather'
//         });
//         else if (resp.statusCode === 200) resolve({
//             temp: body.currently.temperature
//         })
//     })
// })