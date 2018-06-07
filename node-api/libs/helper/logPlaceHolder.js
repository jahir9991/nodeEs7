import {logger} from './logger';

export const indexSuccessPlaceHolder = (data, pagination, controllerName) => ({
    success: true,
    total: data.count,
    limit: pagination.limit,
    skip: pagination.skip,
    page: pagination.page,
    message: `Get All ${controllerName} with pagination`,
    data: data.rows
});
export const indexErrorPlaceHolder = (err, controllerName) => ({
    success: false,
    message: `Error in Get All ${controllerName} with search`,
    error: err
});
export const showSuccessPlaceHolder = (data, pagination, controllerName) => ({
    success: true,
    message: `read single ${controllerName}`,
    data
});
export const showErrorPlaceHolder = (err, controllerName) => ({
    success: false,
    message: `error in read single ${controllerName}`,
    error: err
});
export const updateSuccessPlaceHolder = (data, controllerName) => ({
    success: true,
    message: `update  single ${controllerName}`,
    data
});
export const updateErrorPlaceHolder = (err, controllerName) => ({
    success: false,
    message: `error in update single ${controllerName}`,
    error: err
});
export const deleteSuccessPlaceHolder = (data, pagination, controllerName) => ({
    success: true,
    message: `delete single ${controllerName}`,
    data
});
export const deleteErrorPlaceHolder = (err, controllerName) => ({
    success: false,
    message: `error in delete single ${controllerName}`,
    error: err
});
export const initLogPlaceHolder = (req, controllarName, callerName = null) => {

    logger.info('>>>>>>>Controller log START <<<<<<<<<<<');
    logger.info(`request for ${controllarName}--${callerName}`);
    logger.debug('query =>', req.query);
    logger.debug('params =>', req.params);
    logger.debug('body =>', req.body);
    logger.debug('>>>>>>>Controller log END <<<<<<<<<<<');

};
export const middlewareLog = (req, _api) => {

    logger.debug('>>>>>>>Middleware log START <<<<<<<<<<<');
    logger.debug(`a ${req.method} request in ${_api} route.`);
    logger.debug('query ========>', req.query);
    logger.debug('params =======>', req.params);
    logger.debug('body =========>', req.body);
    logger.debug('>>>>>>>Middleware log END <<<<<<<<<<<');

};
