const bbp = require('bluebird');


const initComponents = {
    promiseLib: bbp
};
const pgp = require('pg-promise')(initComponents);
const cn = process.env.DATABASE_URL;
const db = pgp(cn);

db.func('version')
    .then(data => {   
    console.log('Database connection success', data)
    })
    .catch(error => {
        console.log('Database connection error')
    });

module.exports =  db;