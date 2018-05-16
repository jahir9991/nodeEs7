import express from 'express';
const _routes = express.Router();


import {executiveController as _controller} from "../controllers";
export const executiveRoutes = _routes;
const _api = 'executives';





/*REST*/
_routes.use([`/${_api}`], (req, res, next) => {

    console.log(`a ${req.method} request in ${_api} route.`);
    console.log('query ========>', req.query);
    console.log('params =======>', req.params);
    console.log('body =========>', req.body);
    next();
});

/*..........FIND ALL GET /api/v1/.................... */
_routes.route(`/${_api}`).get(_controller.getAll);


/*.........FIND ONE  Get /api/v1/products/id.................... */
_routes.route(`/${_api}/:_id`).get(_controller.getOne);


/*..........CREATE SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}`).post(_controller.create);


/*..........EDIT SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}/:_id`).put(_controller.edit);


/*..........EDIT SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}/:_id`).delete(_controller._delete);

