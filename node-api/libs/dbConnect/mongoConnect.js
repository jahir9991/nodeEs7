import config from 'config';
import mongoose from 'mongoose';

mongoose.Promise = Promise;

export const mongoConnect = () => {

    // configure mongodb
    if (config.get('MONGO_USER')) {

        const DBOptions = {
            user: config.get('MONGO_USER'),
            pass: config.get('MONGO_PASSWORD')
        };

        mongoose.connect(
            process.env.MONGO_URL || config.get('MONGO_URL'),
            DBOptions
        );

    } else {

        mongoose.connect(process.env.MONGO_URL || config.get('MONGO_URL'));

    }
    mongoose.connection.on('connected', () => {

        console.log(`APP MONGODB: ${mongoose.version}: ${config.get('MONGO_URL')}`);

    });

    mongoose.connection.on('disconnected', () => {

        console.log(`Mongoose disconnected to: ${config.get('MONGO_URL')}`);

    });

    process.on('SIGINT', () => {

        console.log('\nMongoose disconnected through app termination\n');
        process.exit(0);

    });

};
