import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PageRoutes from "../router/page_routes";
import { RepUserProfile as RepoUserProfile } from "../repositories/user.repo";
import { useState } from "react";
import { useEffect } from "react";

const useAuth = () => {
    const [authData, setAuthData] = useState(null);

    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const setUserData = (user) => {
        setAuthData({
            id: user["_id"],
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
        });
    };

    const setAuth = (data) => {
        if (data) {
            setCookie("access_token", data.access_token, { path: "/" });
            navigate(PageRoutes.homeRoute.path, { replace: true });
            setUserData(data.user);
        } else {
            removeCookie("access_token");
            setAuthData(null);
        }
    };

    const logout = () => {
        setAuth(null);
    };

    const isAuth = cookies.access_token != null;
    const token = cookies.access_token;

    const { data, refetch, isSuccess } = RepoUserProfile();

    const fetchAuth = async () => {
        if (isAuth) {
            await refetch();
        } else {
            setAuthData(null);
        }
    };

    useEffect(() => {
        if (isSuccess && data != null) {
            setUserData(data);
        }
    }, [isSuccess, data]);

    const isAdmin = authData?.role === "ADMIN";
    const isSeller = authData?.role === "SELLER";
    const userId = authData?.id;

    return {
        isAuth,
        setAuth,
        logout,
        token,
        userId,
        authData:
            authData == null
                ? null
                : {
                    id: authData.id,
                    name: authData.name,
                    email: authData.email,
                    role: authData.role,
                    avatar: authData.avatar,
                },
        isAdmin,
        isSeller,
        fetchAuth,
    };
};

export default useAuth;