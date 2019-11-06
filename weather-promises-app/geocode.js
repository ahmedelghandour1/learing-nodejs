const request = require('request');
const axios = require('axios').default;


const geocodeAddress = (address) => {
    const key = `AIzaSyBSs8aPFmMWmJqhcIfn664Kp2B9ChB5AJ4`;
    const encodedAddress = encodeURIComponent(address);
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodedAddress}`);
    // return new Promise((resolve, reject) => {
    //     request(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodedAddress}`, {
    //         json: true,
    //     }, (err, resp, body) => {
    //         if (err) {
    //             reject({
    //                 msg: 'Google server error',
    //                 err
    //             });
    //         } else if (body.status === 'ZERO_RESULTS') {
    //             reject({
    //                 msg: 'Unable to find that address'
    //             })
    //         } else if (body.status === 'OK') {
    //             resolve({
    //                 address: body.results[0].formatted_address,
    //                 lat: body.results[0].geometry.location.lat,
    //                 lng: body.results[0].geometry.location.lng,
    //             })
    //         }
    //     })
    // })
}


module.exports = {
    geocodeAddress
}