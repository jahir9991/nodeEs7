import {Sequelize} from 'sequelize';
import {mysqlConnect} from '../../libs';

const DataTypes = Sequelize;

export const Product = mysqlConnect.define(
    'products',
    {
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

        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {tableName: 'products'}
);
