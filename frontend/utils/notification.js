/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

import { notification } from 'antd';

const notificationWithIcon = (type, title, msg) => {
  notification[type]({
    message: title,
    description: msg
  });
};

export default notificationWithIcon;
