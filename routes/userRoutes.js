import express from 'express';
import {readSingleUser, readUserList} from "../controllers";


export const userRoutes = express.Router();
userRoutes.use(['/users'], (req, res, next) => {
   console.log(`a ${req.method} request in users route.`);
    next();
});

userRoutes.route('/users').get(readUserList);
userRoutes.route('/users/:_id').get(readSingleUser);


