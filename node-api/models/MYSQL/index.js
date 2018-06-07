export {Product} from './product';
export {User} from './user.js';

import {User} from './user.js';
import {Product} from './product';
// for migration.................
export const allModel = [
    Product,
    User
];
