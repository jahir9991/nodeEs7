import {initLogPlaceholder} from "../libs";


const getAll = async (req, res, next) => {

    try {
        initLogPlaceholder(req, 'readProductList');


        let data = [{
            id: 1,
            name: "iphone",
            price: 12,
            quantity: 15,
            image: "1111"
        }, {
            id: 2,
            name: "samsung",
            price: 12,
            quantity: 15,
            image: "1111"

        }];


        res.status(200).json({
            success: true,
            message: 'from  user list ',
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  user list ',
            error
        });

    }
};


const getOne = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readSingleProduct');
        res.status(200).json({
            success: true,
            message: 'from single product of id ' + req.params._id
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from single user of id ' + req.params._id,
            error

        });

    }

};


/*.....................post......................................*/
const create = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'createSingleProduct');

        res.status(200).json({
            success: true,
            message: 'from  create single user  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  create single user  ',
            error
        });
    }


};


/*.....................edit......................................*/
const edit = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'editSingleProduct');

        res.status(200).json({
            success: true,
            message: 'from  edit single user  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  edit single user  ',
            error
        });
    }


};


/*.....................delete......................................*/
const _delete = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'deleteSingleProduct');

        res.status(200).json({
            success: true,
            message: 'from  delete single user  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  delete single user ',
            error
        });

    }
};


export const productController = {
    getAll,
    getOne,
    create,
    edit,
    _delete
};


