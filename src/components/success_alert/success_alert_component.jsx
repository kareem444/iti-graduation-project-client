import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { hideSuccessAlert } from "../../redux/global/global.reducer";

const SuccessAlertComponent = () => {
    const global = useSelector((state) => state.global)
    const dispatch = useDispatch()

    useEffect(() => {
        if (global.showSuccessAlert) {
            setTimeout(() => {
                dispatch(hideSuccessAlert())
            }, 4000)
        }
    }, [global.showSuccessAlert])

    return (
        <div
            className="container-fluid position-fixed bottom-0 my-5 px-5 w-100"
            style={{
                display: global.showSuccessAlert ? "block" : "none",
                zIndex: 9999,
            }}
        >
            <div className="row justify-content-end">
                <div className="col-9 col-sm-6 col-md-3 m-2 alert alert-success text-center fs-4" role="alert">
                    {global.successMessage ?? ""}
                </div>
            </div>
        </div>
    );
};

export default SuccessAlertComponent;
