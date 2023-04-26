import React from 'react'
import './change_password.css'

const ChangePasswordPage = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center h-100 align-items-center'>
                <div className='col-12 col-md-8 col-lg-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5 className='card-title'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#31708f' className="bi bi-grid" viewBox="0 0 16 16">
                                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                </svg>
                                <span className='header-title'>
                                    Change password
                                </span>
                            </h5>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-6 separator social-login-box'>
                                    <br />
                                    <img
                                        src='https://bootdey.com/img/Content/avatar/avatar1.png'
                                        alt=''
                                        className='img-thumbnail'
                                    />
                                </div>
                                <div className='col-6 login-box pt-4 pt-sm-5 pt-md-5 pt-lg-5'>
                                    <div className='form-group pt-4'>
                                        <div className='input-group'>
                                            <span className='input-group-text'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#555" className="bi bi-lock" viewBox="0 0 16 16">
                                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                                </svg>
                                            </span>
                                            <input
                                                className='form-control'
                                                type='password'
                                                placeholder='Current Password'
                                            />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='input-group'>
                                            <span className='input-group-text'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#555" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z" />
                                                </svg>
                                            </span>
                                            <input
                                                className='form-control'
                                                type='password'
                                                placeholder='New Password'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='row justify-content-center'>
                                <div className='col-6 text-center'>
                                    <button className='btn btn-success icon-btn-save' type='submit'>
                                        <span className='btn-save-label'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-save">
                                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                                            </svg>
                                        </span>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePasswordPage
