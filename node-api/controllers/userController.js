import {Helper} from '../libs';
import {User as Model} from '../models/MYSQL';
import {BaseController} from './baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

export const userController = BaseController(controllerName, Model, {});
