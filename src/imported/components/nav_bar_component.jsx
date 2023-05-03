import { ShoppingOutlined } from '@ant-design/icons'
import logo from '../images/logoWithNewColor.png'
import React, { useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BadgeComponent from './badge_component'
import { BasketToggle } from './basket'
import UserAvatarComponent from './user_avatar_component'
import PageRoutes from '../../router/page_routes'
import cartIcon from '../../imported/images/icons/icons8-shopping-cart-64.png'

const NavBarComponent = () => {
  const navbar = useRef(null)
  const { pathname } = useLocation()

  const store = {}

  const scrollHandler = () => {
    if (navbar.current && window.screen.width > 480) {
      if (window.pageYOffset >= 70) {
        navbar.current.classList.add('is-nav-scrolled')
      } else {
        navbar.current.classList.remove('is-nav-scrolled')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const onClickLink = e => { }

  const basketDisabledPathNames = [
    // ROUTE.CHECKOUT_STEP_1,
  ]

  return (
    <nav
      className='navigation navbar navbar-expand-lg navbar-light bg-light'
      ref={navbar}
    >
      <div className='container navigation-menu-main' style={{ maxWidth: "100%" }}>
        <a className='navbar-brand' href='#'>
          <Link to='/'>
            <img
              height={30}
              className='ms-3 mt-md-0'
              alt='Logo'
              src={logo}
            />
          </Link>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 align-middle mb-lg-0'>
            <li className='nav-item my-3 my-lg-0'>
              <NavLink
                activeClassName='navigation-menu-active nav-link active navigation-menu-active'
                aria-current='page'
                exact
                to={PageRoutes.homeRoute.path}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item my-3 my-lg-0'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.productsRoute.path}
              >
                Products
              </NavLink>
            </li>
            <li className='nav-item my-3 my-lg-0'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.aboutRoute.path}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item my-3 my-lg-0'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.contactUsRoute.path}
              >
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item d-block d-lg-none my-3'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.checkOutFirstStep.path}
              >
                Check out
                <BadgeComponent count={2} />
              </NavLink>
            </li>
            <li className='nav-item d-block d-lg-none my-3'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.signINRoute.path}
              >
                Sign in
              </NavLink>
            </li>
            <li className='nav-item d-block d-lg-none my-3'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.signUpRoute.path}
              >
                sign up
              </NavLink>
            </li>
            <li className='nav-item d-block d-lg-none my-3'>
              <NavLink
                activeClassName='navigation-menu-active nav-link'
                to={PageRoutes.checkOutFirstStep.path}
              >
                Logout
              </NavLink>
            </li>
          </ul>
          <ul className='navbar-nav me-2'>
            <li className=' m-1 nav-item d-none d-lg-block'>
              <BasketToggle>
                {({ onClickToggle }) => (
                  <button
                    className='button-link navigation-menu-link basket-toggle'
                    disabled={basketDisabledPathNames.includes(pathname)}
                    onClick={onClickToggle}
                    type='button'
                  >
                    <BadgeComponent count={2}>
                      <img src={cartIcon} height={20} />
                    </BadgeComponent>
                  </button>
                )}
              </BasketToggle>
            </li>
            <li className='d-none d-lg-block pt-3'>
              <UserAvatarComponent />
            </li>
            <li className=' m-1 nav-item d-sm-none d-none d-lg-block'>
              <Link
                className='d-none d-lg-block'
                onClick={onClickLink}
                to={PageRoutes.signUpRoute.path}
              >
                Sign Up
              </Link>
            </li>
            <li className=' m-1 nav-item d-sm-none d-none d-lg-block'>
              <Link
                className='nav-item margin-left-s d-none d-lg-block'
                onClick={onClickLink}
                to={PageRoutes.signINRoute.path}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent
