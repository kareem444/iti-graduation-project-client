import AboutPage from "../pages/about/about_page"
import HomePage from "../pages/home/home_page"
import LayoutPage from "../pages/layout/layout_page"
import NoPage from "../pages/no_page/no_page"

export default class PageRoutes {
    static layoutRoute = {
        path: "/",
        component: <LayoutPage />,
    }

    static homeRoute = {
        component: <HomePage />,
    }

    static aboutRoute = {
        path: "/about",
        component: <AboutPage />,
    }

    static NoPageRoute = {
        path: "*",
        component: <NoPage />,
    }
}