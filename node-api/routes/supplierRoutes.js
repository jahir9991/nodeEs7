import express from 'express';
import {middlewareLog} from "../libs";
const _routes = express.Router();


import {supplierController as _controller} from "../controllers";
export const supplierRoutes = _routes;
const _api = 'suppliers';





/*REST*/
_routes.use([`/${_api}`], (req, res, next) => {

    middlewareLog(req, _api);
    next();
});

/*..........FIND ALL GET /api/v1/.................... */
_routes.route(`/${_api}`).get(_controller.getAll);


/*.........FIND ONE  Get /api/v1//id.................... */
_routes.route(`/${_api}/:_id`).get(_controller.getOne);


/*..........CREATE SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}`).post(_controller.create);


/*..........EDIT SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}/:_id`).put(_controller.edit);


/*..........EDIT SINGLE POST /api/v1/products.................... */
_routes.route(`/${_api}/:_id`).delete(_controller._delete);

