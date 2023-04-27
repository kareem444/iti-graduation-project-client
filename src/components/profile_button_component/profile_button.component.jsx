import React from 'react';
import { Link } from 'react-router-dom';
import PageRoutes from '../../router/page_routes';
import useAuth from '../../custom_hooks/use_auth';

const ProfileButtonComponent = () => {
    const { logout } = useAuth()
    return (
        <nav className="nav-item dropdown">
            <a
                className="nav-link dropdown-toggle textColor"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle" />
                <span className='ms-2'>Mark Williams</span>
            </a>
            <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item" to={PageRoutes.profileRoute.path}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to={PageRoutes.editProfileRoute.path}>
                        Edit Profile
                    </Link>
                </li>
                <li>
                    <hr className="dropdown-divider"></hr>
                </li>
                <li>
                    <a className="btn dropdown-item" onClick={() => logout()}>
                        Log Out
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default ProfileButtonComponent;

