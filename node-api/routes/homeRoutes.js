import express from 'express';


export const homeRoutes = express.Router();
homeRoutes.use(['/'], (req, res, next) => {
    console.log(`a ${req.method} request in users route.`);
    next();
});

homeRoutes.route('/').get((req,res,next)=>{
    res.render('index',{title:'jahir'})
});

