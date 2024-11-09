/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

const mongoose = require('mongoose');
const logger = require('../middleware/winston.logger');

const connectionString = process.env.MONGO_URI || 'mongodb://localhost:27017/hotel-room-booking-system';
mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useCreateIndex: true, // for mongoose 6.x
        // useFindAndModify: false, // for mongoose 6.x
      })
      .then(() => {
        logger.info('Connection establish to MongoDB database successful!');
      })
      .catch((error) => {
        logger.error('Error connecting to MongoDB: ', error);
      });
  } catch (error) {
    logger.error('Database connection error: ', error);
  }
};

module.exports = connectDatabase;
