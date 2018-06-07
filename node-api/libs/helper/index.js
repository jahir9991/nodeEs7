import {logger} from './logger';
import {asyncForEach} from './asyncForEach';
import {pagination} from './pagination';
import {restApiPlaceHolder} from './restApiPlaceHolder';
import {
    indexSuccessPlaceHolder,
    indexErrorPlaceHolder,
    showSuccessPlaceHolder,
    showErrorPlaceHolder,
    updateSuccessPlaceHolder,
    updateErrorPlaceHolder,
    deleteSuccessPlaceHolder,
    deleteErrorPlaceHolder,
    initLogPlaceHolder
} from './logPlaceHolder';
import {isDefined, baseFilter, getFileName} from './utility';

export const Helper = {
    logger,
    asyncForEach,
    pagination,
    restApiPlaceHolder,
    initLogPlaceHolder,
    indexSuccessPlaceHolder,
    indexErrorPlaceHolder,
    showSuccessPlaceHolder,
    showErrorPlaceHolder,
    updateSuccessPlaceHolder,
    updateErrorPlaceHolder,
    deleteSuccessPlaceHolder,
    deleteErrorPlaceHolder,
    isDefined,
    baseFilter,
    getFileName
};

// export const Auth = {
//     getToken: (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;

//         }
//         return null;
//     },
//     getUser: (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             let token = req.headers.authorization.split(' ')[1];
//             if (token) {
//                 return jwt.decode(req.jwt, config.get('JWT.secret'));
//             }

//         } else if (req.query && req.query.token) {
//             if (req.query.token) {
//                 return jwt.decode(req.query.token, config.get('JWT.secret'));
//             }
//         }
//         return null;
//     }

// };
