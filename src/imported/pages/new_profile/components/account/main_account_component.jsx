import React from "react";
import { RepoUpdateMyProfile } from "../../../../../repositories/user.repo";
import { useForm } from "react-hook-form";

const MainAccountComponent = ({ authData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        values: {
            name: authData?.name ?? '',
            email: authData?.email ?? '',
            bio: authData?.bio ?? ''
        }
    })

    const { mutate, isLoading } = RepoUpdateMyProfile()
    const handleRegistration = data => mutate(data)

    const registerOptions = {
        name: { required: 'Name is required' },
        email: { required: 'Email is required' }
    }

    return (
        <div className="account">
            <h3
                className="fs-1"
                style={{
                    color: "#888",
                }}
            >
                Edit Profile
            </h3>
            <hr className="my-4" />
            <div className="account-details">
                <form onSubmit={handleSubmit(handleRegistration)}>
                    <div className="row">
                        <div className="col-12 col-md-6 p-3">
                            <input
                                type="text"
                                className="form-control p-4"
                                placeholder="Please Enter Your Name"
                                style={{ fontSize: "16px" }}
                                {...register('name', registerOptions.name)}
                            />
                            <small className="text-danger fs-4">
                                {errors?.name && errors.name.message}
                            </small>
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <input
                                type="text"
                                className="form-control p-4"
                                placeholder="Please Enter Your Email"
                                style={{ fontSize: "16px" }}
                                {...register('email', registerOptions.email)}
                            />
                            <small className="text-danger fs-4">
                                {errors?.email && errors.email.message}
                            </small>
                        </div>

                        <div className="col-12 p-3">
                            <textarea
                                rows={5}
                                className="form-control p-4"
                                placeholder="Please Enter Your Description"
                                style={{ fontSize: "16px" }}
                                {...register('bio')}
                            />
                        </div>
                    </div>
                    <div className="profile-actions d-flex justify-content-center mt-5" >
                        <button
                            type="submit"
                            className="btn btn-secondary w-50"
                            style={{
                                backgroundColor: "#6c7ae0",
                            }}
                        >
                            {isLoading == true ? (
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                "Save changes"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainAccountComponent;
