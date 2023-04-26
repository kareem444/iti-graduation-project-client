import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import "../../Styling/checkout_page.css";

const CheckoutPage = () => {
  const [checkOut, setCheckOut] = useState(false);
  const checkoutMessage = "Congratulations, Sweety!";
  let orderCheckOut = function () {
    setCheckOut(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <section
        className="h-100 h-custom bgSecondary kalam-font"
        itemScope
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a
                          href="#!"
                          className="text-body d-flex align-items-center text-decoration-none"
                        >
                          <i className="bi bi-arrow-left-short"></i>{" "}
                          Continue shopping
                        </a>
                      </h5>
                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1 fw-bold">
                            Shopping cart
                          </p>
                          <p className="mb-0">
                            You have 4 items in your cart
                          </p>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="assets/img.jpg"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Iphone 11 pro</h5>
                                <p className="small mb-0">
                                  256GB, Navy Blue
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div
                                style={{ width: "100px" }}
                              >
                                <h5 className="mb-0 text-danger text-start">
                                  Rejected{" "}
                                </h5>
                              </div>
                              <div
                                style={{ width: "50px" }}
                              >
                                <h5 className="fw-normal mb-0">
                                  2
                                </h5>
                              </div>
                              <div
                                style={{ width: "80px" }}
                              >
                                <h5 className="mb-0">
                                  $900
                                </h5>
                              </div>

                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="assets/img.jpg"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>
                                  Samsung galaxy Note 10{" "}
                                </h5>
                                <p className="small mb-0">
                                  256GB, Navy Blue
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div
                                style={{ width: "100px" }}
                              >
                                <h5 className="mb-0 text-warning text-start">
                                  Pending{" "}
                                </h5>
                              </div>
                              <div
                                style={{ width: "50px" }}
                              >
                                <h5 className="fw-normal mb-0">
                                  2
                                </h5>
                              </div>
                              <div
                                style={{ width: "80px" }}
                              >
                                <h5 className="mb-0">
                                  $900
                                </h5>
                              </div>
                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card mb-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="assets/img.jpg"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>Canon EOS M50</h5>
                                <p className="small mb-0">
                                  Onyx Black
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div
                                style={{ width: "100px" }}
                              >
                                <h5 className="mb-0 text-success text-start">
                                  Accepted{" "}
                                </h5>
                              </div>
                              <div
                                style={{ width: "50px" }}
                              >
                                <h5 className="fw-normal mb-0">
                                  1
                                </h5>
                              </div>
                              <div
                                style={{ width: "80px" }}
                              >
                                <h5 className="mb-0">
                                  $1199
                                </h5>
                              </div>
                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card mb-3 mb-lg-0">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <img
                                  src="assets/img.jpg"
                                  className="img-fluid rounded-3"
                                  alt="Shopping item"
                                  style={{ width: "65px" }}
                                />
                              </div>
                              <div className="ms-3">
                                <h5>MacBook Pro</h5>
                                <p className="small mb-0">
                                  1TB, Graphite
                                </p>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <div
                                style={{ width: "50px" }}
                              >
                                <h5 className="fw-normal mb-0">
                                  1
                                </h5>
                              </div>
                              <div
                                style={{ width: "80px" }}
                              >
                                <h5 className="mb-0">
                                  $1799
                                </h5>
                              </div>
                              <a
                                href="#!"
                                style={{ color: "#cecece" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrashCan}
                                />{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="card  text-dark rounded-3 playfair-font ">
                        <div className="card-body px-auto bg-lightBrown fw-bolder">
                          {checkOut == true && (
                            <>
                              <p>{checkoutMessage}</p>
                            </>
                          )}
                          {checkOut == false && (
                            <>
                              <div className="d-flex justify-content-between align-items-center mx-auto ">
                                <h5 className="mb-0 fw-bolder">
                                  Card details
                                </h5>
                                <img
                                  src="assets/img.jpg"
                                  className="img-fluid rounded-3"
                                  style={{
                                    width: "45px",
                                  }}
                                  alt="Avatar"
                                />
                              </div>

                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  fill="#1565C0"
                                  d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"
                                ></path>
                                <path
                                  fill="#FFF"
                                  d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"
                                ></path>
                                <path
                                  fill="#FFC107"
                                  d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"
                                ></path>
                              </svg>

                              <form
                                className="mt-4 form-floating fw-normal"
                                onSubmit={handleSubmit(
                                  onSubmit
                                )}
                              >
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Cardholder's Name"
                                    {...register(
                                      "CardholdersName",
                                      {
                                        required:
                                          "Please Enter the cardholder's name",
                                        pattern: {
                                          value:
                                            /\w+[-.~']*/,
                                          message:
                                            "Invalid Cardholder's name",
                                        },
                                      }
                                    )}
                                  />
                                  <label htmlFor="floatingInput">
                                    Cardholder's Name
                                  </label>
                                  <small className="text-danger m-1">
                                    {errors?.CardholdersName &&
                                      errors
                                        ?.CardholdersName
                                        .message}
                                  </small>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control  "
                                    id="floatingInput"
                                    placeholder="Card Number"
                                    maxLength={48}
                                    {...register(
                                      "cardNumber",
                                      {
                                        required:
                                          "Please Enter the card's number",
                                        pattern: {
                                          value:
                                            /^4[0-9]{12}(?:[0-9]{3})?$/,
                                          message:
                                            "Invalid Card Number",
                                        },
                                      }
                                    )}
                                  />
                                  <label htmlFor="floatingInput">
                                    Card Number
                                  </label>
                                  <small className="text-danger m-1">
                                    {" "}
                                    {errors?.cardNumber &&
                                      errors.cardNumber
                                        .message}{" "}
                                  </small>
                                </div>

                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    id="typeExp exp"
                                    className="form-control form-control-lg "
                                    placeholder="MM/YYYY"
                                    size="7"
                                    minLength="7"
                                    maxLength="7"
                                    {...register(
                                      "expiration",
                                      {
                                        required:
                                          "Please Enter the card's expiration date",
                                        pattern: {
                                          value:
                                            /0[1-9]\/202[3-9]|1[0-2]\/202[3-9]/,
                                          message:
                                            "Invalid Date",
                                        },
                                      }
                                    )}
                                  />

                                  <label
                                    className="form-label"
                                    htmlFor="typeExp"
                                  >
                                    Expiration
                                  </label>
                                  <small className="text-danger m-1">
                                    {errors?.expiration &&
                                      errors?.expiration
                                        .message}
                                  </small>
                                </div>

                                <div className="form-floating mb-3">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                    minLength="3"
                                    maxLength="3"
                                    {...register("cvv", {
                                      required:
                                        "Please Enter the card's CVV",
                                      pattern: {
                                        value: /[0-9]{3}/,
                                        message:
                                          "Invalid cvv",
                                      },
                                    })}
                                  />
                                  <label
                                    className="htmlForm-label"
                                    htmlFor="typeText"
                                  >
                                    Cvv
                                  </label>
                                  <small className="text-danger m-1">
                                    {errors?.cvv &&
                                      errors?.cvv.message}
                                  </small>
                                </div>

                                <hr
                                  className="my-4 bg-secondary"
                                  style={{
                                    height: "1.5px",
                                  }}
                                />

                                <div className="d-flex justify-content-between mb-4">
                                  <p className="mb-2">
                                    Total(Incl. taxes)
                                  </p>
                                  <p className="mb-2">
                                    $ 4818.00
                                  </p>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <button
                                    type="submit"
                                    className="btn  btn-block btn-lg  col-4 fw-bold checkoutBtn"
                                    disabled={
                                      checkOut != false
                                    }
                                  >
                                    <span>Checkout </span>
                                  </button>{" "}
                                </div>
                              </form>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
