import express from 'express';
import {readAddressList, readSingleAddress,createSingleAddress, editSingleAddress, deleteSingleAddress} from "../controllers";


export const addressRoutes = express.Router();
addressRoutes.use(['/addresses'], (req, res, next) => {

    console.log(`a ${req.method} request in addresses route.`);


    next();
});

/*..........FIND ALL GET /api/v1/addresses.................... */
addressRoutes.route('/addresses').get(readAddressList);


/*.........FIND ONE  Get /api/v1/addresses/id.................... */
addressRoutes.route('/addresses/:_id').get(readSingleAddress);


/*..........CREATE SINGLE POST /api/v1/users.................... */
addressRoutes.route('/addresses').post(createSingleAddress);



/*..........EDIT SINGLE POST /api/v1/addresses.................... */
addressRoutes.route('/addresses/:_id').post(editSingleAddress);



/*..........EDIT SINGLE POST /api/v1/addresses.................... */
addressRoutes.route('/addresses/:_id').delete(deleteSingleAddress);

