import AboutPage from "../pages/about/about_page";
import Contact_us from "../pages/contactUs/contact_us";
import HomePage from "../pages/home/home_page";
import LayoutPage from "../pages/layout/layout_page";
import NoPage from "../pages/no_page/no_page";
import Products from "../pages/products/products_page";
import Sign_in from "../pages/signIn/sign_in";
import Sign_up from "../pages/signUp/Sign_up";
import CheckoutPage from "../pages/checkout/checkout_page";
import ChangePasswordPage from "../pages/change_password/change_password.page";
import EditProfilePage from "../pages/edit_profile/edit_profile.page";
import EnterEmailPage from "../pages/enter_email/enter_email.page";
import ProfilePage from "../pages/profile/profile_page";
import SellerOrders from "../pages/sellerdashboard/scenes/orderslist";
import SellerOrderDetails from "../pages/sellerdashboard/scenes/orderdetails";
import SellerAddproduct from "../pages/sellerdashboard/scenes/addproduct";
import SellerEditproduct from "../pages/sellerdashboard/scenes/editproduct";
import SellerProductDetails from "../pages/sellerdashboard/scenes/productDetails";
import Calendar from "../pages/sellerdashboard/scenes/calendar/calendar";
import SellerDashboard from './../pages/sellerdashboard/scenes/dashboard/index';
import SellerDashboardLayout from './../pages/sellerdashboard/App';
import SellerProducts from './../pages/sellerdashboard/scenes/productslist/index';

export default class PageRoutes {
  static layoutRoute = {
    path: "/",
    component: <LayoutPage />,
  };

  static homeRoute = {
    component: <HomePage />,
  };

  static aboutRoute = {
    path: "/about",
    component: <AboutPage />,
  };
  static signINRoute = {
    path: "/signin",
    component: <Sign_in />,
  };
  static signUpRoute = {
    path: "/signup",
    component: <Sign_up />,
  };
  static contactUsRoute = {
    path: "/contactus",
    component: <Contact_us />,
  };
  static productsRoute = {
    path: "/products",
    component: <Products />,
  };
  static checkoutRoute = {
    path: "/checkout",
    component: <CheckoutPage />,
  };
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
//seller dashboard 
static sellerDashboard= {
    path: "sellerdashboard",
    component: <SellerDashboard />,
}
static sellerDashboardLayout= {
    path: "/sellerdashboardlayout",
    component: <SellerDashboardLayout />,
}

static sellerProducts= {
    path: "sellerproducts",
    component: <SellerProducts />,
}
static sellerAddProduct= {
    path: "selleraddproduct",
    component: <SellerAddproduct/>,
}
static sellerEditProducts= {
    path: "sellereditproducts",
    component: <SellerEditproduct />,
}
static sellerProductDetails= {
    path: "sellerproductDetails",
    component: <SellerProductDetails />,
}
static sellerOrders= {
  path: "sellerorders",
  component: <SellerOrders />,
}
static sellerOrderDetails= {
  path: "sellerorderdetails",
  component: <SellerOrderDetails />,
}
static sellerCalender= {
  path: "sellercalendar",
  component: <Calendar />,
}
  static NoPageRoute = {
    path: "*",
    component: <NoPage />,
  };
}
