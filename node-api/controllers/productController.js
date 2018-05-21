import {
    initLogPlaceholder,
    pagination
} from "../libs";
import {
    Product
} from '../models'


const getAll = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readProductList');
        let _pagination = pagination(req.query);

        let where = {};
        req.query.name ? where.name = req.query.name : '';
        req.query.quantity ? where.quantity = req.query.quantity : '';

        let productList = await Product.findAndCountAll({
            where,
            limit: _pagination.limit,
            offset: _pagination.skip,
        });

        res.status(200).json({
            success: true,
            message: 'from  product list ',
            total: productList.count,
            limit: _pagination.limit || 'all',
            skip: _pagination.skip,
            page: _pagination.page,
            data: productList.rows,
        });


    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  product list ',
            error
        });

    }
};


const getOne = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readSingleProduct');


        let where = {};
        where.id = req.params._id;

        if (req.query.name) {
            where.name = req.query.name;
        }
        if (req.query.quantity) {
            where.quantity = req.query.quantity;
        }


        let data = await Product.findOne({
            where
        });
        res.status(200).json({
            success: true,
            message: 'from  readSingleProduct  ',
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from single product of id ' + req.params._id,
            error

        });

    }

};


/*.....................post......................................*/
const create = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'createSingleProduct');
        let data = await Product.create(req.body);

        res.status(200).json({
            success: true,
            message: 'from  create single product ',
            data
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  create single product  ',
            error
        });
    }


};


/*.....................edit......................................*/
const edit = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'editSingleProduct');
        let data = await Product.update(req.body, {
            where: {
                id: req.params._id
            }
        });
        if (data[0]) {

            let data = await Product.findOne({
                where: {
                    id: req.params._id
                }
            });
            res.status(200).json({
                success: true,
                message: 'from  edit single product  ',
                data
            });
        } else {
            res.status(200).json({
                success: false,
                message: 'something went wrong in update single product  ',

            });

        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  edit single product  ',
            error
        });
    }


};


/*.....................delete......................................*/
const _delete = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'deleteSingleProduct');

        let data = await Product.destroy({
            where: {
                id: req.params._id
            }
        });
        res.status(200).json({
            success: true,
            message: 'from  delete single product  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  delete single product ',
            error
        });

    }
};


// custom....................................


export const productController = {
    getAll,
    getOne,
    create,
    edit,
    _delete
};