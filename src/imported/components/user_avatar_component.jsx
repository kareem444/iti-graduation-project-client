/* eslint-disable indent */
import {
  LoadingOutlined, LogoutOutlined, UserOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PageRoutes from '../../router/page_routes';
import dropDownIcon from '../../imported/images/icons/icons8-arrow-down-22.png'

const UserAvatarComponent = () => {
  const profile = {
    fullname: "kareem",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
  }
  const userNav = useRef(null);
  const isAuthenticating = false

  const toggleDropdown = (e) => {
    const closest = e.target.closest('div.user-nav');

    try {
      if (!closest && userNav.current.classList.contains('user-sub-open')) {
        userNav.current.classList.remove('user-sub-open');
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.addEventListener('click', toggleDropdown);

    return () => document.removeEventListener('click', toggleDropdown);
  }, []);

  const onClickNav = () => {
    userNav.current.classList.toggle('user-sub-open');
  };

  return <div
    className="user-nav"
    onClick={onClickNav}
    onKeyDown={() => { }}
    ref={userNav}
    role="button"
    tabIndex={0}
  >
    <div className="user-nav-img-wrapper me-3">
      <img
        alt=""
        className="user-nav-img"
        src={profile.avatar}
      />
    </div>
    <h5 className="text-overflow-ellipsis mb-0">{profile.fullname && profile.fullname.split(' ')[0]}</h5>
    <img src={dropDownIcon} className='ms-3' height={15} />
    <div className="user-nav-sub mt-4">
      <Link
        to={PageRoutes.accountRoute.path}
        className="user-nav-sub-link"
      >
        <UserOutlined />
        Profile
      </Link>
      <h6
        className="user-nav-sub-link margin-0 d-flex"
        // onClick={() => dispatch(signOut())}
        role="presentation"
      >
        <LogoutOutlined />
        SIGN OUT
      </h6>
    </div>
  </div>
};

UserAvatarComponent.propType = {
  profile: PropTypes.object.isRequired
};

export default UserAvatarComponent;
