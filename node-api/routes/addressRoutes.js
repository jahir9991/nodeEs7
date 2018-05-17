import express from 'express';

const _routes = express.Router();


import {addressController as _controller} from "../controllers";
import {middlewareLog} from "../libs";

export const addressRoutes = _routes;
const _api = 'addresses';


/*REST*/
_routes.use([`/${_api}`], (req, res, next) => {
    middlewareLog(req, _api);

    next();
});

/*..........FIND ALL GET /api/v1/.................... */
_routes.route(`/${_api}`).get(_controller.getAll);


/*.........FIND ONE  Get /api/v1//id.................... */
_routes.route(`/${_api}/:_id`).get(_controller.getOne);


/*..........CREATE SINGLE POST /api/v1/addresse.................... */
_routes.route(`/${_api}`).post(_controller.create);


/*..........EDIT SINGLE POST /api/v1/addresse.................... */
_routes.route(`/${_api}/:_id`).put(_controller.edit);


/*..........EDIT SINGLE POST /api/v1/addresse.................... */
_routes.route(`/${_api}/:_id`).delete(_controller._delete);

