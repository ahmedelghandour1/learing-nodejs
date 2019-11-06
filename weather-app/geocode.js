const request = require('request');


const geocodeAddress = (address, results, error) => {
    const key = `AIzaSyBSs8aPFmMWmJqhcIfn664Kp2B9ChB5AJ4`;
    const encodedAddress = encodeURIComponent(address);
    request(`https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodedAddress}`, {
        json: true,
    }, (err, resp, body) => {
        if (err) {
            error({msg: 'Google server error', err});
        } else if (body.status === 'ZERO_RESULTS') {
            error({msg: 'Unable to find that address'})
        } else if (body.status === 'OK') {
           results({
               address: body.results[0].formatted_address,
               lat: body.results[0].geometry.location.lat,
               lng: body.results[0].geometry.location.lng,
           })
        }
    })
}


module.exports = {
    geocodeAddress
}