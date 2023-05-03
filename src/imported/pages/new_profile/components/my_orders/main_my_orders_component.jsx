import React from "react";
import { Link } from "react-router-dom";

const dateOptions = {
  timeZone: "UTC",
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", dateOptions);
};

const MainMyOrdersComponent = () => {
  return (
    <div className="order-list">
      <h3
        className="fs-1"
        style={{
          color: "#888",
        }}
      >
        Orders
      </h3>
      <hr />
      <p
        className="mb-2 mt-5"
        style={{
          color: "#222",
          fontSize: "2rem",
        }}
      >
        3 orders
      </p>
      <div className="order-box border w-100 rounded my-3">
        <Link to="/" className="d-block box-link">
          <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
            <div className="d-flex flex-column flex-sm-row justify-content-sm-between text-center text-sm-start">
              <div className="order-first-item p-lg-3">
                <img
                  width={100}
                  className="rounded float-start mt-3 mt-sm-0 ms-3 ms-lg-0"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
              </div>
              <div className="p-3">
                <div className="order-details">
                  <div className="my-3">
                    <span
                      className="order-label"
                      style={{
                        color: "#222",
                        fontSize: "2rem",
                      }}
                    >
                      Sint dolor ea voluptuary qui et aliquot.
                    </span>
                  </div>
                  <div className="my-3">
                    <span
                      className="order-label order-status"
                      style={{
                        color: "#888",
                        fontSize: "1.5rem",
                      }}
                    >
                      Pending
                    </span>
                  </div>
                  <div className="my-3 d-flex align-items-center justify-content-center justify-content-sm-start gap-2">
                    <img src="https://img.icons8.com/ios/50/null/clock--v1.png" height={12}/>
                    <span
                      className="order-label"
                      style={{
                        color: "#888",
                        fontSize: "1.2rem",
                      }}
                    >
                      {` ${formatDate(Date.now())}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="me-3 mb-3">
              <span
                className="order-label"
                style={{
                  color: "#888",
                  fontSize: "2rem",
                }}
              >
                $51
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainMyOrdersComponent;
