const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const {fetchWeatherData} = require('../utils/utils');
const {checkIncidentsSchema} = require('../schemas/validators');
const {checkSchema, validationResult} = require('express-validator');


const incidentsSchema = checkIncidentsSchema;

router.post('/', fetchWeatherData, checkSchema(incidentsSchema), (req, res, next) => {
   const errors = validationResult(req)

    if(!errors.isEmpty()){
       return res.status(400).json({message: errors.array()[0]['msg']});
    } else {
        const incidentData = [req.body['client_id'], req.body['incident_desc'], req.body['city'], req.body['country'], req.body['weather_report']];

        db.none('INSERT INTO incidents(client_id, incident_desc, city, country, weather_report) VALUES ($1, $2, $3, $4, $5)', incidentData)
            .then(() => {
                res.status(201).json({message: 'Incident added successfully.'});
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({message: 'An error occurred. Please try again after some time.'});
            })
    }
})

router.get('/', (req, res, next) => {

    db.manyOrNone('SELECT client_id, incident_desc, city, country, weather_report FROM incidents')
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({message: 'An error occurred. Please try again after some time.'});
        })

})

module.exports =  router;