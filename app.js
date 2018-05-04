import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";


/*.............code start ...............................*/

import {mainRoutes} from "./routes";
import {apiRoutes} from "./routes";


/*............code end.......................................*/



let app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/api/v1', (req, res, next) => {
    console.log(`a ${req.method} request in api route.`);
    // req.jwt = Auth.getToken(req);
    // req.user = Auth.getUser(req);
    next();
}, apiRoutes);



app.use('/', (req, res, next) => {
    console.log(`a ${req.method} request in main route.`);
    // req.jwt = Auth.getToken(req);
    // req.user = Auth.getUser(req);
    next();
}, mainRoutes);



// catch 404 and forward to error handler
app.use((req, res, next)=> {
  next(createError(404));
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;

