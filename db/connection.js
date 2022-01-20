const bbp = require('bluebird');


const initComponents = {
    promiseLib: bbp
};
const pgp = require('pg-promise')(initComponents);
const cn = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
const db = pgp(cn);

db.func('version')
    .then(data => {   
    console.log('Database connection success', data)
    })
    .catch(error => {
        console.log('Database connection error')
    });

module.exports =  db;