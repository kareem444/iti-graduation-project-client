import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PageRoutes from "../../../../../router/page_routes";
import AvatarComponent from "../../../../../components/avatar_component/avatar_component";

const AccountMenuComponent = (props) => {
  const location = useLocation();

  return (
    <div className="panel-sidebar fs-3 mt-5">
      <div className="list-group">
        <a
          className="list-group-item disabled"
          style={{
            color: "#888",
          }}
        >
          Dashboard
        </a>
        <a
          className={
            "list-group-item " +
            (location.pathname == PageRoutes.accountRoute.path &&
              "list-group-item-primary")
          }
        >
          <NavLink
            to={PageRoutes.profileRoute.path}
            activeClassName="active-link "
            style={{
              color:
                location.pathname == PageRoutes.accountRoute.path
                  ? "#6c7ae0"
                  : "#222",
            }}
          >
            Edit Profile
          </NavLink>
        </a>
        <a
          className={
            "list-group-item " +
            (location.pathname == PageRoutes.myOrdersRoute.path &&
              "list-group-item-primary")
          }
        >
          <NavLink
            to={PageRoutes.myOrdersRoute.path}
            activeClassName="active-link"
            style={{
              color:
                location.pathname == PageRoutes.myOrdersRoute.path
                  ? "#6c7ae0"
                  : "#222",
            }}
          >
            Orders
          </NavLink>
        </a>
      </div>
    </div>
  );
};

export default AccountMenuComponent;
