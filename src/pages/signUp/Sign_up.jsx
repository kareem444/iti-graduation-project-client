import React from "react";
import { useForm } from "react-hook-form";
import "../../Styling/signup.css";
import { RepoAuthRegister } from "../../repositories/auth.repo";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageRoutes from "../../router/page_routes";
import useAuth from "../../custom_hooks/use_auth";

const Signup = () => {
  const { mutate, isLoading } = RepoAuthRegister();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const handleRegistration = (data) => mutate(data);
  const handleError = (errors) => {
    console.log(`errors`, errors);
  };

  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      navigate(PageRoutes.homeRoute.path);
    }
  }, [isAuth]);

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have at least 3 characters",
      },
      maxLength: {
        value: 20,
        message: "Name Max length 20 characters",
      },
      pattern: {
        value: /^[a-zA-Z]+(([_\][a-zA-Z ])?[a-zA-Z]*)*$/,
        message: "Accept _ and space",
      },
    },
    email: {
      required: "Email is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Enter Valid Email",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
      pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        message: "at least one letter, one number and one special character",
      },
    },
    confirm_password: {
      required: "Confirm password is required",
      validate: (val) => {
        if (watch("password") != val) {
          return "Your passwords do no match";
        }
      },
    },
    userType: { required: "Account Type is required" },
  };
  return (
    <>
      {/* <div className="register-page bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt-3">
              <h3 className="mb-3 text-center fs-1 mb-3">
                Register
              </h3>
              <div className="bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-7 pe-0">
                    <div className="form-left h-100 py-3 px-5">
                      <form
                        action=""
                        className="row g-3 "
                        onSubmit={handleSubmit(
                          handleRegistration,
                          handleError
                        )}
                      >
                        <div className="col-12">
                          <label>
                            Name
                            <span className="text-danger">
                              *
                            </span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-person-fill"></i>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              {...register(
                                "name",
                                registerOptions.name
                              )}
                              placeholder="Enter Username"
                            ></input>
                          </div>
                          <small className="text-danger">
                            {errors?.name &&
                              errors.name.message}
                          </small>
                        </div>

                        <div className="col-12">
                          <label>
                            Email
                            <span className="text-danger">
                              *
                            </span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-envelope"></i>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              {...register(
                                "email",
                                registerOptions.email
                              )}
                              placeholder="Email"
                            ></input>
                          </div>
                          <small className="text-danger">
                            {errors?.email &&
                              errors.email.message}
                          </small>
                        </div>
                        <div className="col-12">
                          <label>
                            Password
                            <span className="text-danger">
                              *
                            </span>
                          </label>
                          <div className="input-group">
                            <div className="input-group-text">
                              <i className="bi bi-lock-fill"></i>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              {...register(
                                "password",
                                registerOptions.password
                              )}
                              placeholder="Enter Password"
                            ></input>
                          </div>
                          <small className="text-danger">
                            {errors?.password &&
                              errors.password.message}
                          </small>
                        </div>

                                                <div className="col-12">
                                                    <label>Account type<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-circle"></i></div>
                                                        <select defaultValue={'seller'} {...register('role', registerOptions.userType)} className="form-select" aria-label="Default select example">
                                                            <option value="SELLER">Seller</option>
                                                            <option value="CLIENT">Client</option>
                                                        </select>
                                                    </div>
                                                </div>

                        

                        <div className="col-12 mt-0 text-center">
                          <LoadingButton
                            loading={isLoading}
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit(
                              handleRegistration,
                              handleError
                            )}
                          >
                            Sign up
                          </LoadingButton>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ps-0  d-none d-md-block">
                    <div className="form-right h-100 bg-primary bg-img text-white text-center pt-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* al sing up al gadeda */}

      <section class="vh-100 bg-image bk__img">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card card__style">
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center robotoFont mb-5">
                      Create an account
                    </h2>

                    <form
                      onSubmit={handleSubmit(handleRegistration, handleError)}
                    >
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg cus__Input"
                          placeholder="Your Name"
                          name="userName"
                          {...register("name", registerOptions.name)}
                        />
                        <small className="text-danger fs-4 p-2">
                          {errors?.name && errors.name.message}
                        </small>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg cus__Input"
                          placeholder="Your Email"
                          name="email"
                          {...register("email", registerOptions.email)}
                        />
                        <small className="text-danger fs-4 p-2">
                          {errors?.email && errors.email.message}
                        </small>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg cus__Input"
                          placeholder="Your Password"
                          name="password"
                          style={{ padding: "12px 10px" }}
                          {...register("password", registerOptions.password)}
                        />
                        <small className="text-danger fs-4 p-2">
                          {errors?.password && errors.password.message}
                        </small>
                      </div>

                      <div class="form-outline mb-5">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg cus__Input"
                          placeholder="Repeat Your Password"
                          name="rePassword"
                          style={{ padding: "12px 10px" }}
                          {...register(
                            "confirm_password",
                            registerOptions.confirm_password
                          )}
                        />
                        <small className="text-danger fs-4 p-2">
                          {errors?.confirm_password &&
                            errors.confirm_password.message}
                        </small>
                      </div>

                      <h3 className="mt-5 robotoFont__Body">User Type:</h3>
                      <div class="d-flex row justify-content-between mt-4 mb-4 w-100 ms-1">
                        <div className="sign-up-user-type-btn col-5 col-md-4 justify-content-start">
                          <input
                            type="radio"
                            id="client"
                            value="CLIENT"
                            className="ms-2"
                            name="accType"
                            checked
                            {...register("role")}
                          />
                          <label htmlFor="client">
                            <span>Cleint</span>
                          </label>
                        </div>
                        <div className="sign-up-user-type-btn col-5 col-md-4 justify-content-start ">
                          <input
                            type="radio"
                            id="saller"
                            value="SELLER"
                            className="ms-2"
                            name="accType"
                            {...register("role")}
                          />
                          <label htmlFor="saller">
                            <span>SELLER</span>
                          </label>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          class="mt-5 btn col-6 btn__OwnHouver btn-block btn-lg gradient-custom-4 text-white"
                        >
                          {isLoading == true ? (
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          ) : (
                            "Register"
                          )}
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0 robotoFont__Body">
                        Have already an account?
                        <Link
                          to={PageRoutes.signINRoute.path}
                          class="fw-bold text-body ms-2"
                        >
                          <u>Login here</u>
                        </Link>
                      </p>
                    </form>
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

export default Signup;
