import express from 'express';
import {
    middlewareLog
} from "../libs";

const _routes = express.Router();


import {
    productController as _controller
} from "../controllers";

export const productRoutes = _routes;
const _api = 'products';


/*REST*/
_routes.use([`/${_api}`], (req, res, next) => {
    middlewareLog(req, _api);
    next();
});


_routes.route(`/${_api}`).get(_controller.getAll);


_routes.route(`/${_api}/:_id`).get(_controller.getOne);


_routes.route(`/${_api}`).post(_controller.create);


_routes.route(`/${_api}/:_id`).put(_controller.edit);


_routes.route(`/${_api}/:_id`).delete(_controller._delete);