import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import PageRoutes from "../router/page_routes"

const useAuth = () => {
    const [cookies, setCookie , removeCookie] = useCookies(['access_token'])
    const navigate = useNavigate()

    const isAuth = cookies.access_token != null

    const setAuth = (data) => {
        if (data) {
            setCookie('access_token', data.access_token, { path: '/' })
            navigate(PageRoutes.homeRoute.path, { replace: true })
        } else {
            removeCookie("access_token")
        }
    }

    const logout = () => {
        setAuth(null)
    }

    return { isAuth, setAuth, logout }
}

export default useAuth