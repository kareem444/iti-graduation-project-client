import React from 'react';
import './edit_profile.css'
import '../../router/page_routes'
import PageRoutes from '../../router/page_routes';
import { Link } from 'react-router-dom';

const EditProfilePage = () => {
    return (
        <div className="container-xl px-4 mt-4">
            <h1 className='text-center my-3'>Edit Profile</h1>
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            <button className="btn primarybg text-white" type="button">Upload new image</button>
                        </div>
                    </div>
                    <div className='text-center mt-3'>
                        <Link to={PageRoutes.enterEmailRoute.path} className='btn btn-primary'>
                        Reset password
                        </Link>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputOrgName">Name</label>
                                        <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLocation">Email</label>
                                        <input className="form-control" id="inputLocation" type="email" placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">Description</label>
                                    <textarea className="form-control" rows="6" placeholder="Enter description about your self" />
                                </div>
                                <div className='col-12 text-center'>
                                    <button className="btn primarybg text-white w-50" type="button">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditProfilePage;
