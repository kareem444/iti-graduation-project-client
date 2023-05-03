import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../imported/images/logoWithNewColor.png" ;
import PageRoutes from '../../router/page_routes';
const FooterComponent = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    PageRoutes.homeRoute.path,
    PageRoutes.aboutRoute.path,
    PageRoutes.accountRoute.path,
    PageRoutes.signINRoute.path,
    PageRoutes.signUpRoute.path,
    PageRoutes.checkOutFirstStep.path,
    PageRoutes.checkOutSecondStep.path,
    PageRoutes.checkOutThirdStep.path,
    PageRoutes.myOrdersRoute.path,
    PageRoutes.productsRoute.path,
    PageRoutes.productDetails.path
    ,PageRoutes.contactUsRoute.path
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="container-fluid  pt-5" style={{backgroundColor:"#222"}}>
        <div className="row mt-5 mb-4 justify-content-around text-white">
          <div className=" col-3  mb-4">
            <h4 className=" fw-bold mb-4 text-white">
              Explore
            </h4>
            <p>
              <NavLink
                to={"/about"}
                className="  text-muted small"
              >
                About us
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/products"}
                className="  text-muted small"
              >
                Products
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/contactus"}
                className="  text-muted  small"
              >
                Contact us
              </NavLink>
            </p>
          </div>
        
          <div className=" col-3   mb-4">
            <h4 className=" fw-bold mb-4 text-white  ">
    Account
            </h4>
            <p>
              <NavLink
               to="/profile"
                className="  text-muted small"
              >Profile</NavLink>
            </p>
            <p>
              <NavLink
                to="/signin"
                className="  text-muted small"
              >
                Sign In
              </NavLink>
            </p>
            <p>
               <NavLink
                to="/signup"
                className="  text-muted  small"
              >
                Sign Up
              </NavLink></p>
          </div>
       <div className=" col-3   mb-4 pt-4">
            <input className=" fw-bold mb-4  rounded form-control w-75 py-4" placeholder='dreamywedding@gmail.com'/>
   
            <button className='px-5  py-3 rounded-pill text-dark'>
               <NavLink
                to=""
                className="    text-white"
              >
                Subscribe
              </NavLink></button>
          </div>
        </div>
        <div className="row">
          <div className=" mb-4  d-flex justify-content-center align-items-center" >
             <NavLink
                to={"/"}
                className=" "
              >
<img src={logo} alt=""  style={{height:"30px"}}/>
              </NavLink>
          </div>{" "}
        </div>
      </footer>
  );
};

export default FooterComponent;
