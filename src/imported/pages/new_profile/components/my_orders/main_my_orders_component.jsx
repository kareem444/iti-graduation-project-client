import React from 'react';
import { Link } from 'react-router-dom';

const dateOptions = {
  timeZone: 'UTC',
  weekday: 'long',
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-US', dateOptions);
};

const MainMyOrdersComponent = () => {
  return (
    <div className="order-list">
      <h3>My Orders</h3>
      <hr />
      <p className="mb-2">3 orders</p>
      <div className="order-box border w-100 rounded my-3">
        <Link to="/" className="d-block box-link">
          <div className="d-flex flex-column flex-lg-row">
            <div className='order-first-item p-lg-3'>
              <img
                width={150}
                className='rounded float-start'
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
            </div>
            <div className="d-flex flex-column flex-xl-row justify-content-between flex-1 ml-lg-2 mr-xl-4 p-3">
              <div className="order-details">
                <div className="mb-1">
                  <span>Status</span>
                  <span className="order-label order-status">Pending</span>
                </div>
                <div className="mb-1">
                  <span>Order #</span>
                  <span className="order-label">urdar44545dwa45</span>
                </div>
                <div className="mb-1">
                  <span>Ordered on</span>
                  <span className="order-label">
                    {` ${formatDate(Date.now())}`}
                  </span>
                </div>
                <div className="mb-1">
                  <span>Order Total</span>
                  <span className="order-label"> $51</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainMyOrdersComponent;
