const bbp = require('bluebird');

const initComponents = {
    promiseLib: bbp,
};

const pgp = require('pg-promise')(initComponents);

const cn = {
        host: `${process.env.DB_HOST}`,
        port: 5432,
        database: 'dbrcffl9n4mov2',
        user: 'guclxasktufdol',
        password: '4ce687d4322f29e7c7b8fb5e49b8170278226d7b14bfca7a44ebdda3240aea2e',
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