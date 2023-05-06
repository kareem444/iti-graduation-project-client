import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from "../../imported/images/logoWithNewColor.png" ;
import PageRoutes from '../../router/page_routes';
import "../../../src/Styling/footer_section.css";
import { useLang } from '../../custom_hooks/use_get_current_language';
const FooterComponent = () => {
  const { pathname } = useLocation();
  const {translate,isArabic} = useLang();

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
            <h4 className=" fw-bold mb-4 text-white ft__titleSize">
              {translate("footer_ex")}
            </h4>
            <p>
              <NavLink
                to={"/about"}
                className="  text-muted ft__headSize"
              >
                {translate("footer_About")}
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/products"}
                className="  text-muted ft__headSize "
              >
                {translate("footer_Product")}
              </NavLink>
            </p>
            <p>
              <NavLink
                to={"/contactus"}
                className="  text-muted  ft__headSize"
              >
                {translate("footer_Contact")}
              </NavLink>
            </p>
          </div>
        
          <div className=" col-3   mb-4">
            <h4 className=" fw-bold mb-4 text-white  ft__titleSize">
                   {translate("footer_Account")}
            </h4>
            <p>
              <NavLink
               to="/profile"
                className="  text-muted ft__headSize"
              > {translate("footer_Profile")} </NavLink>
            </p>
            <p>
              <NavLink
                to="/signin"
                className="  text-muted ft__headSize"
              >
                {translate("footer_SingIn")}
              </NavLink>
            </p>
            <p>
               <NavLink
                to="/signup"
                className="  text-muted  ft__headSize"
              >
                {translate("footer_SingUp")}
              </NavLink></p>
          </div>
       <div className=" col-3   mb-4 ">
            <div>
              <h4 className='hd__get'> {translate("footer_GetInTouch")} </h4>
              <p className='bd__get'>{translate("footer_GetInTouchMsg")}</p>
            </div>
   
            <button className='px-5  py-3 rounded-pill  btn__OwnColor'>
               <NavLink
                to=""
                className="text-white bd__get__btn"
              >
                {translate("footer_GetInTouchBtn")}
              </NavLink></button>
          </div>
        </div>
        <div className="row">
          <div className=" mb-4  d-flex justify-content-center align-items-center" >
             <NavLink
                to={"/"}
                className=" "
              >
              <p className='bd__get'> {translate("footer_CopyRight")} &copy; </p>
              </NavLink>
          </div>{" "}
        </div>
      </footer>
  );
};

export default FooterComponent;
