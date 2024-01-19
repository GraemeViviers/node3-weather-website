const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=2459f81941014124bd8113707241601&q=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, (body.current.condition.text + '. It is currently ' + body.current.temp_c + ' degrees out. It feels like ' + body.current.feelslike_c + ' degrees out.')
            )
        }
    })
}

module.exports = forecast