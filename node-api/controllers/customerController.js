import {initLogPlaceholder} from "../libs";


const getAll = async (req, res, next) => {

    try {
        initLogPlaceholder(req, 'readExecutiveList');

        let data = [{}];
        res.status(200).json({
            success: true,
            message: 'from  readExecutiveList list ',
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  readExecutiveList',
            error
        });

    }
};


const getOne = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readSingleExecutive');

        let data = [];


        res.status(200).json({
            success: true,
            message: 'from single readSingleExecutive of id ' + req.params._id,
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  readSingleExecutive of id ' + req.params._id,
            error

        });

    }

};


/*.....................post......................................*/
const create = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'createSingleExecutive');

        res.status(200).json({
            success: true,
            message: 'from  createSingleExecutive  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  createSingleExecutive',
            error
        });
    }


};


/*.....................edit......................................*/
const edit = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'editSingleExecutive');

        res.status(200).json({
            success: true,
            message: 'from  edit single Executive  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  edit single Executive  ',
            error
        });
    }


};


/*.....................delete......................................*/
const _delete = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'deleteSingleExecutive');

        res.status(200).json({
            success: true,
            message: 'from  delete single Executive  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  delete single Executive ',
            error
        });

    }
};


export const customerController = {
    getAll,
    getOne,
    create,
    edit,
    _delete
};


