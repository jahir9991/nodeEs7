import {initLogPlaceholder} from "../libs";


const getAll = async (req, res, next) => {

    try {
        initLogPlaceholder(req, 'readAddressList');


        let data = [{
            "name" : "Rafi",
            "location" : "Dhaka",
            "product" : "iPhone"
        },
        {
            "name" : "Raju",
            "location" : "Banasree",
            "product" : "Chair"
        },
        {
            "name" : "Jahid",
            "location" : "Uttora",
            "product" : "Windows"
        }
    ];


        res.status(200).json({
            success: true,
            message: 'from  address list ',
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  address list ',
            error
        });

    }
};


const getOne = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'readSingleAddress');

        let data = [];


        res.status(200).json({
            success: true,
            message: 'from single address of id ' + req.params._id,
            data
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from single address of id ' + req.params._id,
            error

        });

    }

};


/*.....................post......................................*/
const create = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'createSingleAddress');

        res.status(200).json({
            success: true,
            message: 'from  create single address  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  create single address  ',
            error
        });
    }


};


/*.....................edit......................................*/
const edit = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'editSingleAddress');

        res.status(200).json({
            success: true,
            message: 'from  edit single address  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  edit single address  ',
            error
        });
    }


};


/*.....................delete......................................*/
const _delete = async (req, res, next) => {
    try {
        initLogPlaceholder(req, 'deleteSingleAddress');












        
        res.status(200).json({
            success: true,
            message: 'from  delete single address  '
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'error from  delete single address ',
            error
        });

    }
};


export const addressController = {
    getAll,
    getOne,
    create,
    edit,
    _delete
};


