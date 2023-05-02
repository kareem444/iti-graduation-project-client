import logo from '../images/logo-full.png';
import React from 'react';
import { useLocation } from 'react-router-dom';
import PageRoutes from '../../router/page_routes';

const FooterComponent = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    PageRoutes.homeRoute.path,
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
          <span>
            Contacts <br />
            tel : +237 651 97 76 85 <br />
            email : lunetas@yahoo.fr
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Welcome
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default FooterComponent;
