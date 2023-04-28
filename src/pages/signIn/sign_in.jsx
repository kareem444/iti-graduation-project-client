import React from 'react'
import { useForm } from "react-hook-form";
import '../../Styling/signin.css'
import LoadingButton from '@mui/lab/LoadingButton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RepoAuthLogin } from '../../repositories/auth.repo';
import PageRoutes from '../../router/page_routes';
import useAuth from '../../custom_hooks/use_auth';

const Sign_in = () => {
    const { mutate, isLoading } = RepoAuthLogin()
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = async (data) => {
        mutate(data)
    };
    const handleError = (errors) => { console.log(`errors`, errors); };

    const { isAuth } = useAuth();

    useEffect(() => {
        if (isAuth) {
            navigate(PageRoutes.homeRoute.path)
        }
    }, [isAuth])

    const registerOptions = {
        email: {
            required: "Email is required",
            pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Enter Valid Email"
            }
        },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            },
            pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                message: "at least one letter, one number and one special character"
            }
        }
    };
    return (
        <>

            <div className="login-page bg-light">
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

                                                <div className="col-sm-6">
                                                    {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                                                        <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                                    </div> */}
                                                </div>

                                                {/* <div className="col-sm-6">
                                                    <a href="#" className="float-end text-primary">Forgot Password?</a>
                                                </div> */}

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
            </div>

        </>
    )
}

export default Sign_in