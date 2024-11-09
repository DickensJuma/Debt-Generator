/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

import React from 'react';

function Hero({ children, hero }) {
  return (
    <section className={hero}>
      {children}
    </section>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero'
};

export default Hero;
