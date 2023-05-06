import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PageRoutes from "../../../router/page_routes";
import AccountMenuComponent from "./components/account/account_menu_component";
import MainAccountComponent from "./components/account/main_account_component";
import MainMyOrdersComponent from "./components/my_orders/main_my_orders_component";
import AvatarComponent from "../../../components/avatar_component/avatar_component";
import useAuth from "../../../custom_hooks/use_auth";
import { useEffect } from "react";

const NewProfilePage = () => {
    const location = useLocation();
    const { authData, isAuth, } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate(PageRoutes.homeRoute.path)
        }
    }, [isAuth])

    const handleProfileRoutes = () => {
        if (location.pathname == PageRoutes.accountRoute.path) {
            return <MainAccountComponent authData={authData} />;
        } else if (location.pathname == PageRoutes.myOrdersRoute.path) {
            return <MainMyOrdersComponent />;
        }
    };

    return (
        <div
            className="customer content d-block my-3"
            style={{
                paddingRight: "3rem",
                paddingLeft: "3rem",
            }}
        >
            <div class="row justify-content-around">
                <div className="col-md-12 pt-3">
                    <div className="d-flex flex-column justify-content-center mb-5">
                        <AvatarComponent src={authData?.avatar} />
                        <h3 className="my-4" style={{ color: "#222" }}>{authData?.name}</h3>
                        <h5 style={{ color: "#888" }}>{authData?.email}</h5>
                    </div>
                </div>
                <hr className="mb-5" style={{ color: "#ded9d9" }} />
                <div class="col-12 col-md-4 col-xl-3">
                    <AccountMenuComponent />
                </div>
                <div class="col-12 col-md-7 col-xl-7">
                    <div class="panel-body">{handleProfileRoutes()}</div>
                </div>
            </div>
        </div>
    );
};

export default NewProfilePage;
