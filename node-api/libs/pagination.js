export const pagination = (reqBody) => {

    /*............PAGINATION........................START.............*/
    let limit, skip, page;
    if (reqBody.limit === 'all') {
        limit = null;
        skip = 0;
        page = 1;
    } else {
        limit = parseInt(reqBody.limit) ? parseInt(reqBody.limit) : 10;
        skip = parseInt(reqBody.page ? (limit * (reqBody.page - 1)) : 0) | 0; //if there is no skip set skip to 0
        page = parseInt(reqBody.page) ? parseInt(reqBody.page) : 1; //if there is no page number set page to 1

    }


    /*............PAGINATION........................END.............*/
    return {
        limit,
        skip,
        page
    };

};
