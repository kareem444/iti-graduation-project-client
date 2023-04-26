import AboutPage from "../pages/about/about_page"
import ChangePasswordPage from "../pages/change_password/change_password.page";
import Contact_us from "../pages/contactUs/contact_us";
import EditProfilePage from "../pages/edit_profile/edit_profile.page";
import EnterEmailPage from "../pages/enter_email/enter_email.page";
import HomePage from "../pages/home/home_page"
import LayoutPage from "../pages/layout/layout_page"
import NoPage from "../pages/no_page/no_page"
import Products from "../pages/products/products_page";
import ProfilePage from "../pages/profile/profile_page";
import Sign_in from '../pages/signIn/sign_in';
import Sign_up from "../pages/signUp/Sign_up";

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
    static signINRoute = {
        path: "/signin",
        component: <Sign_in />,
    }
    static signUpRoute = {
        path: "/signup",
        component: <Sign_up />,
    }
    static contactUsRoute = {
        path: "/contactus",
        component: <Contact_us />,
    }
    static productsRoute = {
        path: "/products",
        component: <Products />,
    }

    static profileRoute = {
        path: "/profile",
        component: <ProfilePage />,
    }

    static changePasswordRoute = {
        path: "/change-password",
        component: <ChangePasswordPage />,
    }

    static enterEmailRoute = {
        path: "/enter-email",
        component: <EnterEmailPage />,
    }

    static editProfileRoute = {
        path: "/edit-profile",
        component: <EditProfilePage />,
    }

    static NoPageRoute = {
        path: "*",
        component: <NoPage />,
    }
}