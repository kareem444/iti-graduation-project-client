import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageRoutes from "../../router/page_routes";
import dropDownIcon from "../../imported/images/icons/icons8-arrow-down-22.png";
import userImage from '../../imported/images/user.png'

const UserAvatarComponent = ({ authData, logout }) => {
  const userNav = useRef(null);

  const toggleDropdown = (e) => {
    const closest = e.target.closest("div.user-nav");

    try {
      if (!closest && userNav.current.classList.contains("user-sub-open")) {
        userNav.current.classList.remove("user-sub-open");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleDropdown);
    return () => document.removeEventListener("click", toggleDropdown);
  }, []);

  const onClickNav = () => {
    userNav.current.classList.toggle("user-sub-open");
  };

  return (
    <div
      className="user-nav"
      onClick={onClickNav}
      onKeyDown={() => { }}
      ref={userNav}
      role="button"
      tabIndex={0}
    >
      <div className="user-nav-img-wrapper me-3">
        <img alt="" className="user-nav-img" src={authData?.avatar ?? userImage} />
      </div>
      <h5
        className="text-overflow-ellipsis mb-0 className='navigation-menu-active nav-link fw-bold"
        style={{ color: "#222", fontSize: "1.4rem", textTransform: "capitalize" }}
      >
        {authData?.name && authData?.name.split(" ")[0]}
      </h5>
      <img src={dropDownIcon} className="ms-3" height={15} />
      <div className="user-nav-sub mt-4">
        <Link to={PageRoutes.accountRoute.path} className="user-nav-sub-link fw-bold" style={{ color:"#222" }}>
          <img src="https://img.icons8.com/pastel-glyph/64/null/person-male--v1.png" height={25} />
          Profile
        </Link>
        <a
          className="user-nav-sub-link margin-0 d-flex fw-bold"
          onClick={() => logout()}
          style={{ color:"#222" }}
        >
          <img src="https://img.icons8.com/pastel-glyph/64/null/last-1.png" height={20} />
          SIGN OUT
        </a>
      </div>
    </div>
  );
};

export default UserAvatarComponent;
