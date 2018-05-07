import express from 'express';
import {readSingleUser, createSingleUser, readUserList, editSingleUser, deleteSingleUser} from "../controllers";


export const userRoutes = express.Router();
userRoutes.use(['/users'], (req, res, next) => {

   console.log(`a ${req.method} request in users route.`);
    console.log('query ========>',req.query);
    console.log('params =======>',req.params);
    console.log('body =========>',req.body);

    next();
});

/*..........FIND ALL GET /api/v1/users.................... */
userRoutes.route('/users').get(readUserList);


/*.........FIND ONE  Get /api/v1/users/id.................... */
userRoutes.route('/users/:_id').get(readSingleUser);


/*..........CREATE SINGLE POST /api/v1/users.................... */
userRoutes.route('/users').post(createSingleUser);



/*..........EDIT SINGLE POST /api/v1/users.................... */
userRoutes.route('/users/:_id').put(editSingleUser);



/*..........EDIT SINGLE POST /api/v1/users.................... */
userRoutes.route('/users/:_id').delete(deleteSingleUser);

