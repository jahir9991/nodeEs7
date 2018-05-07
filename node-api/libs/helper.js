
export const initLogPlaceholder= (req,funcName)=>{
    console.log(`call from ${funcName}`);
    console.log('query ========>',req.query);
    console.log('params =======>',req.params);
    console.log('body =========>',req.body);
    }