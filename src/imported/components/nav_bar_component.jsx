import { FilterOutlined, ShoppingOutlined } from '@ant-design/icons';
import logo from '../images/logo-full.png';
import React, { useEffect, useRef } from 'react';
import {
  Link, NavLink, useLocation
} from 'react-router-dom';
import BadgeComponent from './badge_component';
import { BasketToggle } from './basket';
import UserAvatarComponent from './user_avatar_component';
import PageRoutes from '../../router/page_routes';
// import UserAvatar from 'views/account/components/UserAvatar';
// import FiltersToggle from './FiltersToggle';
// import SearchBar from './SearchBar';

const NavBarComponent = () => {
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = {}
  // const store = useSelector((state) => ({
  //   basketLength: state.basket.length,
  //   user: state.auth,
  //   isAuthenticating: state.app.isAuthenticating,
  //   isLoading: state.app.loading
  // }));

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

  const onClickLink = (e) => {
    // if (store.isAuthenticating) e.preventDefault();
  };

  const basketDisabledPathNames = [
    // ROUTE.CHECKOUT_STEP_1,
    // ROUTE.CHECKOUT_STEP_2,
    // ROUTE.CHECKOUT_STEP_3,
    // ROUTE.SIGNIN,
    // ROUTE.SIGNUP,
    // ROUTE.FORGOT_PASSWORD
  ];

  return (
    <nav className="navigation" ref={navbar}>
      <div className="logo">
        <Link to="/"><img alt="Logo" src={logo} /></Link>
      </div>
      <ul className="navigation-menu-main">
        <li><NavLink activeClassName="navigation-menu-active" exact to={PageRoutes.homeRoute.path}>Home</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.productsRoute.path}>Products</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.aboutRoute.path}>About</NavLink></li>
        <li><NavLink activeClassName="navigation-menu-active" to={PageRoutes.contactUsRoute.path}>Contact Us</NavLink></li>
      </ul>
      {/* {(pathname === PageRoutes.homeRoute.path || pathname === PageRoutes.homeRoute.path) && (
        <FiltersToggle>
          <button className="button-muted button-small" type="button">
            Filters &nbsp;
            <FilterOutlined />
          </button>
        </FiltersToggle>
        
      )} */}
      {/* <SearchBar /> */}
      <ul className="navigation-menu">
        <li className="navigation-menu-item">

          <BasketToggle>
            {({ onClickToggle }) => (
              <button
                className="button-link navigation-menu-link basket-toggle"
                disabled={basketDisabledPathNames.includes(pathname)}
                onClick={onClickToggle}
                type="button"
              >

                <BadgeComponent count={2}>
                  <ShoppingOutlined style={{ fontSize: '2.4rem' }} />
                </BadgeComponent>
              </button>
            )}
          </BasketToggle>

        </li>
        
          <li className="navigation-menu-item">
            <UserAvatarComponent />
          </li>
        
          <li className="navigation-action">
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
    </nav>
  );
};

export default NavBarComponent;
