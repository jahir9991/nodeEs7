import {Sequelize} from 'sequelize';
import {mysqlDb} from '../libs';

const DataTypes = Sequelize;

export const Product = mysqlDb.define('products', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },


    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '0000-00-00 00:00:00'
    },
    created_by: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    },
    deleted_by: {
        type: DataTypes.INTEGER(11),
        allowNull: true
    }

}, {
    tableName: 'products'
});

