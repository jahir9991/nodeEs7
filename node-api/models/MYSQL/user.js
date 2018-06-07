import {Sequelize} from 'sequelize';
import {mysqlConnect} from '../../libs';

const DataTypes = Sequelize;

export const User = mysqlConnect.define(
    'users',
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

        email: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
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
    {tableName: 'users'}
);
