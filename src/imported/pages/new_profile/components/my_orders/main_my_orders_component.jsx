import React from "react";
import { Link } from "react-router-dom";
import { RepoGetMyOrders } from "../../../../../repositories/order.repo";

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
  const { data, isSuccess, isLoading } = RepoGetMyOrders();

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
      {isLoading == true && (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      {isSuccess == true && data && (
        <>
          <p
            className="mb-2 mt-5"
            style={{
              color: "#222",
              fontSize: "2rem",
            }}
          >
            {data?.length ?? "0"} orders
          </p>
          {data?.map((order) => {
            return (
              <div className="order-box border w-100 rounded my-3">
                <Link to={"/productDetails/" + order.product.id} className="d-block box-link">
                  <div className="d-flex flex-column flex-sm-row justify-content-sm-between">
                    <div className="d-flex flex-column flex-sm-row justify-content-sm-between text-center text-sm-start">
                      <div className="order-first-item p-lg-3">
                        <img
                          width={100}
                          className="rounded float-start mt-3 mt-sm-0 ms-3 ms-lg-0"
                          src={order.product.thumbImage}
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
                              {order.product.name}
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
                              {order.status}
                            </span>
                          </div>
                          <div className="my-3 d-flex align-items-center justify-content-center justify-content-sm-start gap-2">
                            <img
                              src="https://img.icons8.com/ios/50/null/clock--v1.png"
                              height={12}
                            />
                            <span
                              className="order-label"
                              style={{
                                color: "#888",
                                fontSize: "1.2rem",
                              }}
                            >
                              {` ${formatDate(order.createdAt)}`}
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
                        ${order.price}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default MainMyOrdersComponent;
