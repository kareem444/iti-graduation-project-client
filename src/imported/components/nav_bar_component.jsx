import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import logo from '../images/logoWithNewColor.png';
import React, { useEffect, useRef } from 'react';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import BadgeComponent from './badge_component';
import { BasketToggle } from './basket';
import UserAvatarComponent from './user_avatar_component';
import PageRoutes from '../../router/page_routes';
const NavBarComponent = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = {}

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled');
      } else {
        navbar.current.classList.remove('is-nav-scrolled');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  const onClickLink = (e) => { };

  const basketDisabledPathNames = [
    // ROUTE.CHECKOUT_STEP_1,
  ];

  return (
    <nav className="  fixed-top navbar navbar-expand-lg navbar-light bg-light" ref={navbar}>
      <div className="container-fluid navigation-menu-main">
        <a className="navbar-brand" href="#">
          <Link to="/"><img height={100} alt="Logo" src={logo} /></Link>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 align-middle mb-lg-0">
            <li className="nav-item">
              <NavLink activeClassName="navigation-menu-active nav-link active navigation-menu-active" aria-current="page"  exact to={PageRoutes.homeRoute.path}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="navigation-menu-active nav-link" to={PageRoutes.productsRoute.path}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="navigation-menu-active nav-link" to={PageRoutes.aboutRoute.path}>About</NavLink>      
            </li>
            <li className="nav-item">
              <NavLink activeClassName="navigation-menu-active nav-link" to={PageRoutes.contactUsRoute.path}>Contact Us</NavLink>
            </li>
          </ul>
             <ul className=" navbar-nav me-2 mb-2 mb-lg-0 align-items-start align-middle">
         <li className=" m-1 nav-item  d-sm-none d-md-none d-lg-block"  >

           <BasketToggle>
           {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledPathNames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >
                <BadgeComponent count={2}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem',zIndex:"9999",position:'fixed' }} />
                </BadgeComponent>
              </button>
            )}
          </BasketToggle>
        </li>
         <li className=" m-1 nav-item d-xl-none d-lg-none d-md-block d-sm-none d-sm-block" >
         <NavLink activeClassName="navigation-menu-active nav-link" to={PageRoutes.checkOutFirstStep.path}>
                <BadgeComponent count={2}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </BadgeComponent>
          </NavLink>
        </li>

          <li className=" m-1 nav-item navigation-menu-item d-sm-none d-md-none d-lg-block">
            <UserAvatarComponent />
          </li>
          <li className=" m-1 nav-item navigation-menu-item d-lg-none d-md-block d-sm-none d-sm-block">
          <Link
                className="button button-small"
                onClick={onClickLink}
                to={PageRoutes.signUpRoute.path}
              >
                Logout
              </Link>
            </li>

          <li className="m-1 nav-item d-flex align-items-start">
            {pathname === PageRoutes.homeRoute.path && (
              <Link
                className="button button-small"
                onClick={onClickLink}
                to={PageRoutes.signUpRoute.path}
              >
                Sign Up
              </Link>
            )}
            {pathname === PageRoutes.homeRoute.path && (
              <Link
                className="button button-small button-muted margin-left-s"
                onClick={onClickLink}
                to={PageRoutes.signINRoute.path}
              >
                Sign In
              </Link>
            )}
          </li>

      </ul>
        </div>
      </div>
    </nav>

    // <nav className="navigation" ref={navbar}>
    //   <div className="logo">
    //     <Link to="/"><img alt="Logo" src={logo} /></Link>
    //   </div>
    //   <ul className="navigation-menu-main">
    //     <li><NavLink activeClassName="navigation-menu-active" exact to={PageRoutes.homeRoute.path}>Home</NavLink></li>
    //     <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.productsRoute.path}>Products</NavLink></li>
    //     <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.aboutRoute.path}>About</NavLink></li>
    //     <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.contactUsRoute.path}>Contact Us</NavLink></li>
    //   </ul>

    //   <ul className="navigation-menu">
    //     <li className="navigation-menu-item">

    //       <BasketToggle>
    //         {({ onClickToggle }) => (
    //           <button
    //             className="button-link navigation-menu-link basket-toggle"
    //             disabled={basketDisabledPathNames.includes(pathname)}
    //             onClick={onClickToggle}
    //             type="button"
    //           >

    //             <BadgeComponent count={2}>
    //               <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
    //             </BadgeComponent>
    //           </button>
    //         )}
    //       </BasketToggle>

    //     </li>

    //       <li className="navigation-menu-item">
    //         <UserAvatarComponent />
    //       </li>

    //       <li className="navigation-action">
    //         {pathname === PageRoutes.homeRoute.path && (
    //           <Link
    //             className="button button-small"
    //             onClick={onClickLink}
    //             to={PageRoutes.signUpRoute.path}
    //           >
    //             Sign Up
    //           </Link>
    //         )}
    //         {pathname === PageRoutes.homeRoute.path && (
    //           <Link
    //             className="button button-small button-muted margin-left-s"
    //             onClick={onClickLink}
    //             to={PageRoutes.signINRoute.path}
    //           >
    //             Sign In
    //           </Link>
    //         )}
    //       </li>

    //   </ul>
    // </nav>
  );
};

export default NavBarComponent;