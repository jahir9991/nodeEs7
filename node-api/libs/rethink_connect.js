'use strict';

let  r = require('rethinkdbdash')({
    pool: false,
    cursor: true
});

const config = {
    host: 'localhost',
    port: 28015,
    db: 'dokan'
};

export const rethibkConnect = function (req, res, next) {
    let count = 0;

    (function _connect() {
        r.connect(config, (error, connection) => {
            if (error && error.name === 'ReqlDriverError' && error.message.indexOf('Could not connect') === 0 && ++count < 31) {
                console.log(error);
                setTimeout(_connect, 1000);
                return;
            }

            req._rdb = connection;
            next();
        });
    })();
};

export const rethibkClose = function (req, res, next) {
    req._rdb.close();
};