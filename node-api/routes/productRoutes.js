import express from 'express';
import {productController} from "../controllers";


export const productRoutes = express.Router();
productRoutes.use(['/products'], (req, res, next) => {

    console.log(`a ${req.method} request in products route.`);
    console.log('query ========>', req.query);
    console.log('params =======>', req.params);
    console.log('body =========>', req.body);

    next();
});

/*..........FIND ALL GET /api/v1/products.................... */
productRoutes.route('/products').get(productController.getAll);


/*.........FIND ONE  Get /api/v1/products/id.................... */
productRoutes.route('/products/:_id').get(productController.getOne);


/*..........CREATE SINGLE POST /api/v1/products.................... */
productRoutes.route('/products').post(productController.create);


/*..........EDIT SINGLE POST /api/v1/products.................... */
productRoutes.route('/products/:_id').put(productController.edit);


/*..........EDIT SINGLE POST /api/v1/products.................... */
productRoutes.route('/products/:_id').delete(productController._delete);

