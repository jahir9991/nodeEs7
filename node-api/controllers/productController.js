import {Helper} from '../libs';
import {Product as Model} from '../models/MYSQL';
import {BaseController} from './baseController';

const controllerName = Helper.getFileName(__filename, __dirname);

export const productController = BaseController(controllerName, Model, {});
