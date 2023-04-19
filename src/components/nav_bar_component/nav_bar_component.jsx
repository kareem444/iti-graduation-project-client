import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../Styling/nav-bar-component.css";
const NavBarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg secondbg navbar-light  bg-body-tertiary">
        <div className="container-fluid">
            <NavLink to={"/"} className="navbar-brand">
            Dreamy Weddings
          </NavLink>
          <button
            className="navbar-toggler responsiveIcon" 
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon responsiveIcon "></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to={"/"} className="textColor nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
              <NavLink to={"/products"} className="textColor nav-link ">
                  Products
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle textColor"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>{" "}
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
              <NavLink to={"/About"} className="textColor nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to={"/contactus"} className="textColor nav-link ">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control  "
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                className="btn primaryColor "
                type="submit"
              >
                <i className="bi bi-search-heart"></i>{" "}
              </button>
            </form>
            <Link to={"/signin"} className="ms-3 me-1">
              <button className="btn primarybg text-light">
                Sign In
              </button>
            </Link>
            <Link to={"/signup"} className="ms-1">
              <button className="btn  primarybg text-light">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;
