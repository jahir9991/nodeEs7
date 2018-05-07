import {initLogPlaceholder} from "../libs";


export const readSingleAddress =async  (req, res, next) => {
    try{
        initLogPlaceholder(req,'readSingleAddress');


        res.status(200).json({
            success:true,
            message:'from single address of id '+req.params._id
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from single address of id '+req.params._id,
            error:error
        });


    }

};



export const readAddressList = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'readAddressList');

        res.status(200).json({
            success:true,
            message:'from  address list '
        });

    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  address list ',
            error:error
        });
    }
};


/*.....................post......................................*/
export const createSingleAddress = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'createSingleAddress');

        res.status(200).json({
            success:true,
            message:'from  create single address  '
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  create single address  ',
            error
        });
    }


};


/*.....................edit......................................*/
export const editSingleAddress = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'editSingleAddress');


        res.status(200).json({
            success:true,
            message:'from  edit single address  '
        });
    }catch(error){
        res.json(400).json({
            success:false,
            message:'error from  edit single address  ',
            error
        });

    }

};


/*.....................delete......................................*/
export const deleteSingleAddress = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'deleteSingleAddress');

        res.status(200).json({
            success:true,
            message:'from  delete single address  '
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  delete single address  ',
            error
        });
    }

};

