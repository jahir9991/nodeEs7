import config from 'config';
import Sequelize from 'sequelize';
import {Helper} from '../helper';

Helper.logger.info('Opening connection to mysql');

const DBOptions = {
    host: config.get('MYSQL.HOST'),
    user: config.get('MYSQL.USER'),
    password: config.get('MYSQL.PASSWORD'),
    database: config.get('MYSQL.DATABASE'),
    dialect: config.get('MYSQL.DIALECT')
};

const Op = Sequelize.Op;
const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

export const mysqlConnect = new Sequelize(DBOptions.database, DBOptions.user, DBOptions.password, {
    host: DBOptions.host,
    dialect: DBOptions.dialect,
    define: {timestamps: false},

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // operatorsAliases: false
    operatorsAliases
    // dialectOptions: {useUTC: true}
});
