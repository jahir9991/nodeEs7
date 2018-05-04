export const readSingleUser =  (req, res, next) => {
    res.json({
        success:true,
        message:'from single user of id '+req.params._id
    });
};
export const readUserList =  (req, res, next) => {
    res.json({
        success:true,
        message:'from  user list '
    });
};