export const isDefined = (value) => typeof value !== 'undefined' && value !== null;

export const baseFilter = (reqBody, Model, localWhere) => {

    const where = localWhere ? localWhere : {};
    const modelAttributes = Object.keys(Model.rawAttributes);

    modelAttributes.map((attr) => {

        if (reqBody[attr]) {

            where[attr] = reqBody[attr];

        }

    });

    return where;

};

export const getFileName = (filename, dirname) => filename.substring(dirname.length + 1, filename.lastIndexOf('.'));
