/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

import styled from 'styled-components';

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : '/images/jpeg/room-1.jpeg')})
  center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
