import {initLogPlaceholder} from "../libs";


const getAll = async (req, res, next) => {

    try {
        initLogPlaceholder(req, 'readsupplierList');


        let data = [{}];


        res.status(200).json({
            success: true,
            message: 'from  supplier list ',
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  supplier list ',
            error
        });

    }
};


const getOne = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readSinglesupplier');

        let data = [];


        res.status(200).json({
            success: true,
            message: 'from single supplier of id ' + req.params._id,
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from single supplier of id ' + req.params._id,
            error

        });

    }

};


/*.....................post......................................*/
const create = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'createSinglesupplier');

        res.status(200).json({
            success: true,
            message: 'from  create single supplier  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  create single supplier  ',
            error
        });
    }


};


/*.....................edit......................................*/
const edit = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'editSinglesupplier');

        res.status(200).json({
            success: true,
            message: 'from  edit single supplier  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  edit single supplier  ',
            error
        });
    }


};


/*.....................delete......................................*/
const _delete = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'deleteSinglesupplier');












        
        res.status(200).json({
            success: true,
            message: 'from  delete single supplier  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  delete single supplier ',
            error
        });

    }
};


export const supplierController = {
    getAll,
    getOne,
    create,
    edit,
    _delete
};


