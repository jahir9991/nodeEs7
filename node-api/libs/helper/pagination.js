export const pagination = (reqBody) => {

    let limit = null;
    let skip = 0;
    let page = 1;

    if (reqBody.limit !== 'all') {

        limit = Number(reqBody.limit) || 10;
        skip = Number(reqBody.page && reqBody.page > 0 ? limit * (reqBody.page - 1) : 0) || 0;
        page = Number(reqBody.page) || 1;

    }

    return {
        limit,
        page,
        skip
    };

};
