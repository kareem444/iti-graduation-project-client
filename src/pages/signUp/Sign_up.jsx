import React from 'react'
import { useForm } from "react-hook-form";
import '../../Styling/signup.css'
import { RepoAuthRegister } from '../../repositories/auth.repo';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showErrorAlert } from '../../redux/global/global.reducer';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNavigate } from 'react-router-dom';
import PageRoutes from '../../router/page_routes';
import useAuth from '../../custom_hooks/use_auth';

const Signup = () => {
    const { mutate, isError, error, isLoading, isSuccess, data } = RepoAuthRegister()
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => mutate(data);
    const handleError = (errors) => { console.log(`errors`, errors); };


    const { isAuth, setAuth } = useAuth();

    useEffect(() => {
        if (isError) {
            dispatch(showErrorAlert(error))
        }
    }, [isError])

    useEffect(() => {
        if (isSuccess) {
            setAuth(data)
        }
    }, [isSuccess, data])

    useEffect(() => {
        if (isAuth) {
            navigate(PageRoutes.homeRoute.path, { replace: true })
        }
    }, [isAuth])

    const registerOptions = {
        name: {
            required: "Name is required",
            minLength: {
                value: 3,
                message: "Name must have at least 3 characters"
            }, maxLength: {
                value: 20,
                message: "Name Max length 20 characters"
            },
            pattern: {
                value: /^[a-zA-Z]+(([_\][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "Accept _ and space"
            }
        },
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
        },
        userType: { required: "Account Type is required" }
    };
    return (
        <>

            <div className="register-page bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 mt-3">
                            <h3 className="mb-3 text-center fs-1 mb-3">Register</h3>
                            <div className="bg-white shadow rounded">
                                <div className="row">
                                    <div className="col-md-7 pe-0">
                                        <div className="form-left h-100 py-3 px-5">
                                            <form action="" className="row g-3 " onSubmit={handleSubmit(handleRegistration, handleError)} >
                                                <div className="col-12">
                                                    <label>Name<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                        <input type="text" className="form-control" {...register('name', registerOptions.name)} placeholder="Enter Username"></input>
                                                    </div>
                                                    <small className="text-danger">
                                                        {errors?.name && errors.name.message}
                                                    </small>
                                                </div>

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
                                                    <label>Account type<span className="text-danger">*</span></label>
                                                    <div className="input-group">
                                                        <div className="input-group-text"><i className="bi bi-person-circle"></i></div>
                                                        <select defaultValue={'seller'} {...register('usertype', registerOptions.userType)} className="form-select" aria-label="Default select example">
                                                            <option value="seller">Seller</option>
                                                            <option value="client">Client</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 mt-4">
                                                    {/* <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="inlineFormCheck"></input>
                                                        <label className="form-check-label" htmlFor="inlineFormCheck">Remember me</label>
                                                    </div> */}
                                                </div>

                                                <div className="col-12 mt-0 text-center">
                                                    <LoadingButton
                                                        loading={isLoading}
                                                        variant="contained"
                                                        fullWidth
                                                        onClick={handleSubmit(handleRegistration, handleError)}
                                                    >
                                                        Sign up
                                                    </LoadingButton>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-5 ps-0  d-none d-md-block">
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

export default Signup