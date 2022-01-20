const bbp = require('bluebird');


const initComponents = {
    promiseLib: bbp,
};
const pgp = require('pg-promise')(initComponents);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const cn = {
        host: process.env.HOST,
        port: process.env.PORT,
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        max: 30,
        ssl:true
}

const db = pgp(cn);

db.func('version')
    .then(data => {   
    console.log('Database connection success', data)
    })
    .catch(error => {
        console.log('Database connection error')
    });

module.exports =  db;