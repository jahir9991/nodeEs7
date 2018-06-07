import {Helper} from '../libs';
import moment from 'moment';
import {DATE} from 'mysql2/lib/constants/types';

export const BaseController = (controllerName, Model, option = {}) => {

    const index = async (req, res) => {

        try {

            Helper.initLogPlaceHolder(req, controllerName, 'index');

            /* Pagination........START..........*/
            const pagination = Helper.pagination(req.query);

            /* Pagination........END..........*/

            // /* WHERE condition .......START.....................*/
            let where = {};
            let include = [];

            Helper.baseFilter(req.query, Model, where);

            if (req.query.created_at) {

                where.created_at = {
                    $gte: new Date(req.query.created_at),
                    $lt: new Date(req.query.created_at).setDate(new Date(req.query.created_at).getDate() + 1)
                };

            }
            if (req.query.updated_at) {

                where.updated_at = {
                    $gte: new Date(req.query.created_at),
                    $lt: new Date(req.query.created_at).setDate(new Date(req.query.created_at).getDate() + 1)
                };

            }

            if (option.index && option.index.where) {

                where = {
                    ...where,
                    ...option.index.where
                };

                if (option.index.where.$or) {

                    if (req.query.search_term) {

                        where.$or = {};
                        option.index.where.$or.forEach((element) => {

                            where.$or[element] = {$like: `%${req.query.search_term}%`};

                        });

                    } else {

                        Reflect.deleteProperty(where, '$or');

                    }

                }
                if (option.index.where.$and) {

                    if (req.query.search_term) {

                        where.$and = {};
                        option.index.where.$and.forEach((element) => {

                            where.$and[element] = {$like: `%${req.query.search_term}%`};

                        });

                    } else {

                        Reflect.deleteProperty(where, '$and');

                    }

                }

            }
            if (option.index && option.index.include) {

                include = [
                    ...include,
                    ...option.index.include
                ];

            }

            const data = await Model.findAndCountAll({
                where,
                include,
                limit: pagination.limit,
                offset: pagination.skip
            });

            res.status(200).json(Helper.indexSuccessPlaceHolder(data, pagination, controllerName));

        } catch (err) {

            res.status(400).json({
                success: false,
                message: `Error in Get All ${controllerName} with search`,
                error: err
            });

        }

    };
    const show = async (req, res) => {

        try {

            Helper.initLogPlaceHolder(req.query, controllerName, 'show');

            let include = [];

            if (option.show && option.show.include) {

                include = [
                    ...include,
                    ...option.show.include
                ];

            }
            const data = await Model.findOne({
                where: {id: req.params._id},
                include
            });

            res.status(200).json(Helper.showSuccessPlaceHolder(data, controllerName));

        } catch (err) {

            res.status(400).json({
                error: err,
                message: `error in read single ${controllerName} `,
                success: false
            });

        }

    };

    /* .....................edit......................................*/
    const update = async (req, res, next) => {

        try {

            Helper.initLogPlaceHolder(req.query, controllerName);
            const data = await Model.update(req.body, {where: {id: req.params._id}});

            if (data[0]) {

                const newData = await Model.findOne({where: {id: req.params._id}});

                res.status(200).json(Helper.updateSuccessPlaceHolder(newData, controllerName));

            } else {

                res.status(200).json({
                    success: false,
                    message: `something went wrong in update single ${controllerName}`
                });

            }

        } catch (err) {

            res.status(400).json({
                success: false,
                message: `error from  edit single ${controllerName}`,
                error: err
            });

        }

    };

    /* .....................delete......................................*/
    const destroy = async (req, res, next) => {

        try {

            Helper.initLogPlaceHolder(req.query, controllerName);

            const data = await Model.update(
                {deleted_at: new DATE()},
                {where: {id: req.params._id}}
            );

            if (data[0]) {

                const newData = await Model.findOne({where: {id: req.params._id}});

                res.status(200).json(Helper.deleteSuccessPlaceHolder(newData, controllerName));

            } else {

                res.status(200).json({
                    success: false,
                    message: `something went wrong in delete single ${controllerName}`
                });

            }

        } catch (err) {

            res.status(400).json({
                success: false,
                message: `error from  delete single ${controllerName} `,
                error: err
            });

        }

    };

    /* .....................post......................................*/
    const create = async (req, res) => {

        try {

            Helper.initLogPlaceHolder(req.query, controllerName);
            const data = await Model.create(req.body);

            res.status(200).json({
                success: true,
                message: `from  create single ${controllerName} `,
                data
            });

        } catch (err) {

            res.status(400).json({
                success: false,
                message: `error from  create single ${controllerName}`,
                error: err
            });

        }

    };

    return {
        create,
        destroy,
        index,
        show,
        update
    };

};
