import React from "react";
import { Link } from "react-router-dom";
import PageRoutes from "../../router/page_routes";
import useAuth from "../../custom_hooks/use_auth";
import { useEffect } from "react";
import { useState } from "react";

const ProfileButtonComponent = () => {
    const { logout, authData: data } = useAuth();

    const [authData, setAuthData] = useState(null)

    useEffect(() => {
        if (data != null && authData == null) {
            setAuthData(data)
        }
    }, [data, authData])

    return (
        <nav className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle textColor"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img
                    src={
                        authData?.avatar ??
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU"
                    }
                    width="40"
                    height="40"
                    className="rounded-circle"
                />
                <span className="ms-2">{authData?.name}</span>
            </a>
            <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to={PageRoutes.profileRoute.path}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to={PageRoutes.editProfileRoute.path}>
                        Edit Profile
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider"></hr>
                </li>
                <li>
                    <a className="btn dropdown-item" onClick={() => logout()}>
                        Log Out
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default ProfileButtonComponent;
