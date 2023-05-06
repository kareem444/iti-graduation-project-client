import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorAlert } from "../../redux/global/global.reducer";

const ErrorAlertComponent = () => {
    const global = useSelector((state) => state.global)
    const dispatch = useDispatch()

    useEffect(() => {
        if (global.showErrorAlert) {
            setTimeout(() => {
                dispatch(hideErrorAlert())
            }, 8000)
        }
    }, [global.showErrorAlert])

    return (
        <div
            className="container-fluid position-fixed bottom-0 my-5 px-5 w-100"
            style={{
                display: global.showErrorAlert ? "block" : "none",
                zIndex: 9999,
            }}
        >
            <div className="row justify-content-end">
                <div className="col-9 col-sm-6 col-md-3 m-2 alert alert-danger text-center fs-4" role="alert">
                    {global.error?.response?.data?.message ?? ""}
                </div>
            </div>
        </div>
    );
};

export default ErrorAlertComponent;
