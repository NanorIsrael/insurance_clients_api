
const https = require('https');

const OPEN_WEATHER_API_KEY = process.env.OPEN_WEATHER_API_KEY;
const OPEN_WEATHER_URL = "api.openweathermap.org";

function  httpsRequest(extServerOptions, postData, ) {
    return  new Promise((resolve , reject) => {
        const req = https.request(extServerOptions, (res) => {

            const {statusCode} = res;
            if (statusCode < 200 || statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            const contentType = res.headers['content-type'];

            let error;
            if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' +
                    `Expected application/json but received ${contentType}`);
            }
            if (error) {
                reject(error.message);
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    rawData = JSON.parse(rawData);
                } catch (e) {
                    reject(e.message);
                }
                resolve(rawData);
            });
        })
        req.on('error', (e) => {
            reject(`Got error: ${e.message}`);
        });
        if (postData) {
            req.write(postData);
        }
        req.end();
    })
}

async function fetchWeatherData(req, res, next) {
    const extServerOptions = {
        host: OPEN_WEATHER_URL,
        method: 'GET',
        path: `/data/2.5/weather?q=${req.body['city']}&appid=${OPEN_WEATHER_API_KEY}`,
        headers: {
           "content-type": "application/json"
        }
    };
    return httpsRequest(extServerOptions)
        .then(response => {
            req.body = {...req.body, ...{weather_report:response}};
            next();
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({message:"An error occurred"});
        })
}

module.exports = {fetchWeatherData}