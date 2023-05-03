import React from "react";

const MainAccountComponent = () => {
    const user = {};

    function handleSubmit() { }

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
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-6 p-3">
                            <input
                                type="text"
                                className="form-control p-4"
                                placeholder="Please Enter Your Name"
                                style={{ fontSize: "16px" }}
                                onChange={(e) => { }}
                            />
                        </div>
                        <div className="col-12 col-md-6 p-3">
                            <input
                                type="text"
                                className="form-control p-4"
                                placeholder="Please Enter Your Email"
                                style={{ fontSize: "16px" }}
                                onChange={(e) => { }}
                            />
                        </div>

                        <div className="col-12 p-3">
                            <textarea
                                rows={5}
                                className="form-control p-4"
                                placeholder="Please Enter Your Description"
                                style={{ fontSize: "16px" }}
                                onChange={(e) => { }}
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
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainAccountComponent;
