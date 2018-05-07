import {initLogPlaceholder} from "../libs";

export const readSingleUser =async  (req, res, next) => {
   try{
       initLogPlaceholder(req,'readSingleUser');
       res.status(200).json({
           success:true,
           message:'from single user of id '+req.params._id
       });

   }catch(error){
       res.status(400).json({
           success:false,
           message:'error from single user of id '+req.params._id,
           error

       });

   }

};



export const readUserList = async (req, res, next) => {

    try{
        initLogPlaceholder(req,'readUserList');

        res.status(200).json({
            success:true,
            message:'from  user list '
        });

    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  user list ',
            error
        });

    }
};


/*.....................post......................................*/
export const createSingleUser = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'createSingleUser');

        res.status(200).json({
            success:true,
            message:'from  create single user  '
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  create single user  ',
            error
        });
    }



};


/*.....................edit......................................*/
export const editSingleUser = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'editSingleUser');

        res.status(200).json({
            success:true,
            message:'from  edit single user  '
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  edit single user  ',
            error
        });
    }


};


/*.....................delete......................................*/
export const deleteSingleUser = async (req, res, next) => {
    try{
        initLogPlaceholder(req,'deleteSingleUser');

        res.status(200).json({
            success:true,
            message:'from  delete single user  '
        });
    }catch(error){
        res.status(400).json({
            success:false,
            message:'error from  delete single user ',
            error
        });

    }
};

