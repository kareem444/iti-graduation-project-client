import { useCookies } from "react-cookie";
import { RepUserProfile as RepoUserProfile } from "../repositories/user.repo";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAuth, setAuth } from "../redux/user/user.reducer";

const useAuth = () => {
    const authData = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
    const { data, refetch, isSuccess } = RepoUserProfile();

    const setUserData = async (data) => {
        dispatch(setAuth({
            id: data["_id"],
            name: data.name,
            email: data.email,
            role: data.role,
            avatar: data.avatar,
        }))
    };

    const handleSetAuthData = async (data) => {
        if (data != null) {
            setCookie("access_token", data.access_token, { path: "/", httpOnly: false });
            setUserData(data.user);
        } else {
            removeCookie("access_token");
            dispatch(setAuth(null))
        }
    };

    const logout = () => {
        handleSetAuthData(null);
    };

    const isAuth = cookies.access_token != null;
    const token = cookies.access_token;


    const fetchAuth = async () => {
        if (isAuth) {
            await refetch();
        } else {
            dispatch(deleteAuth())
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
        setAuth: handleSetAuthData,
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