import React from "react";
import { useForm } from "react-hook-form";
import "../../Styling/signin.css";
import LoadingButton from "@mui/lab/LoadingButton";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RepoAuthLogin } from "../../repositories/auth.repo";
import PageRoutes from "../../router/page_routes";
import useAuth from "../../custom_hooks/use_auth";

const Sign_in = () => {
    const { mutate, isLoading } = RepoAuthLogin();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handleRegistration = async (data) => {
        mutate(data);
    };
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
    };
    return (
        <>
            {/* <div className="login-page bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 mt-4">
                            <h3 className="mb-3 text-center fs-1 mb-5 ">Login Now</h3>
                            <div className="bg-white shadow rounded">
                                <div className="row">
                                    <div className="col-md-7 pe-0">
                                        <div className="form-left h-100 py-5 px-5">
                                            <form onSubmit={handleSubmit(handleRegistration, handleError)} className="row g-4">

                                                <div className="col-12">
                                                    <label>Email<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-envelope"></i></div>
                                                        <input type="email" className="form-control" {...register('email', registerOptions.email)} placeholder="Email"></input>
                                                    </div>
                                                    <small className="text-danger">
                                                        {errors?.email && errors.email.message}
                                                    </small>
                                                </div>

                                                <div className="col-12">
                                                    <label>Password<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                        <input type="password" className="form-control" {...register('password', registerOptions.password)} placeholder="Enter Password"></input>
                                                    </div>
                                                    <small className="text-danger">
                                                        {errors?.password && errors.password.message}
                                                    </small>
                                                </div>

                                               

                                                

                                                <div className="col-12">
                                                    <LoadingButton
                                                        loading={isLoading}
                                                        variant="contained"
                                                        fullWidth
                                                        onClick={handleSubmit(handleRegistration, handleError)}
                                                    >
                                                        Login
                                                    </LoadingButton>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0 d-none  d-md-block">
                                        <div className="form-right h-100 bg-primary bg-img text-white text-center pt-5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* mahmoud page */}

            <section class="vh-100 bg-image bk__img__SingIn">
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card card__style">
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mt-3 mb-5">
                                            Create an account
                                        </h2>

                                        <form>
                                            <div class="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form3Example3cg"
                                                    class="form-control form-control-lg cus__Input"
                                                    placeholder="Your Email"
                                                    name="email"
                                                />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example4cg"
                                                    class="form-control form-control-lg cus__Input"
                                                    placeholder="Your Password"
                                                    name="password"
                                                    style={{ padding:"11px 10px" }}
                                                />
                                            </div>
                                            <div class="d-flex justify-content-center">
                                                <button
                                                    type="button"
                                                    class="btn my-3 btn__OwnHouver btn-block btn-lg gradient-custom-4 text-white col-6"
                                                >
                                                    Sing in
                                                </button>
                                            </div>

                                            <p class="text-center mt-4 mb-0 robotoFont__Body">
                                                Don't Have a account?
                                                <a href="#!" class="fw-bold text-body ms-3">
                                                    <u>Sing Up Here</u>
                                                </a>
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

export default Sign_in;
