import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import {Helper} from './libs';
import config from 'config';

/* .............code start ...............................*/
import {allModel} from './models/MYSQL';
import {apiRoutes} from './routes';

/* ............code end.......................................*/

const app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    config.get('API.PREFIX'),
    (req, res, next) => {

        console.log(`a ${req.method} request in ${config.get('API.PREFIX')}... route.`);
        // req.jwt = Auth.getToken(req);
        // req.user = Auth.getUser(req);
        next();

    },
    apiRoutes
);

app.use('/', (req, res, next) => {

    console.log(`a ${req.method} request in main route.`);
    // req.jwt = Auth.getToken(req);
    // req.user = Auth.getUser(req);
    // res.send('hello please try <a href="/api/v1/products" end >point</a> ')
    next();

});

app.use('/migration', (req, res, next) => {

    console.log(`a ${req.method} request in migration route.`);

    let force = false;

    if (req.query.force && req.query.force === 'true') {

        if (req.query.token && req.query.token === config.get('MIGRATION.token')) {

            force = true;

        }

    }
    allModel.forEach((element) => {

        element.sync({force});

    });
    res.json({message: `migrating..... ${force ? 'with force' : 'without force'}`});

});

// catch 404 and forward to error handler
app.use((req, res, next) => {

    next(createError(404));

});

// error handler
app.use((err, req, res, next) => {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.status(404).json({
        success: false,
        error: 'not found',
        status: 404
    });

});

export default app;
