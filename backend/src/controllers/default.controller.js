/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

const { successResponse, errorResponse } = require('../configs/app.response');

function defaultController(_req, res) {
  try {
    res.status(200).json(successResponse(
      0,
      'SUCCESS',
      'Welcome to Hotel Room Booking System ~ Backed'
    ));
  } catch (error) {
    res.status(500).json(errorResponse(
      2,
      'SERVER SIDE ERROR',
      error
    ));
  }
}

module.exports = defaultController;
