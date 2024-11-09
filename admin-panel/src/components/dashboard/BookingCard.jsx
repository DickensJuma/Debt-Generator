/**
 * @name Hotel Room Booking System
 * @author Dickens Juma
 * @description Hotel Room Booking and Management System Software ~ Developed By Dickens Juma
 * @copyright ©2023 ― Dickens Juma . All rights reserved.
 * @version v0.0.1
 *
 */

import { Card, Statistic } from 'antd';
import React from 'react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

const formatter = (value) => <CountUp end={value} separator=',' />;
const gridStyle = { width: '25%', textAlign: 'center' };

function BookingCard({ loading, data }) {
  const navigate = useNavigate();

  if (!data) {
    return (
      <div className='flex items-center justify-center h-[300px]'>
        <h2 className='text-[20px] text-center font-text-font font-medium py-4'>
          No data found!
        </h2>
      </div>
    );
  }

  return (
    <Card
      className='w-full cursor-pointer md:w-[49.5%]'
      onClick={() => navigate('/main/booking-orders')}
      title='Bookings Information:'
      loading={loading}
    >
      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Total Bookings'
          formatter={formatter}
          value={data?.total_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Cancel Bookings'
          formatter={formatter}
          value={data?.cancel_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Pending Bookings'
          formatter={formatter}
          value={data?.pending_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Approved Bookings'
          formatter={formatter}
          value={data?.approved_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Rejected Bookings'
          formatter={formatter}
          value={data?.rejected_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Approved Bookings'
          formatter={formatter}
          value={data?.approved_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='In-Reviews Bookings'
          formatter={formatter}
          value={data?.in_reviews_bookings || 0}
        />
      </Card.Grid>

      <Card.Grid style={gridStyle}>
        <Statistic
          className='whitespace-normal lg:whitespace-nowrap'
          title='Completed Bookings'
          formatter={formatter}
          value={data?.completed_bookings || 0}
        />
      </Card.Grid>
    </Card>
  );
}

export default BookingCard;
