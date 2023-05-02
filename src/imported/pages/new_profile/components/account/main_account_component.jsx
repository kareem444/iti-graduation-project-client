import React from 'react';

const MainAccountComponent = () => {
    const user = {}

    function handleSubmit() { }

    return (
        <div className='account'>
            <h3>Account Details</h3>
            <hr />
            <div className='account-details'>
                <div className='info'>
                    <div className='desc'>
                        <p className='one-line-ellipsis mr-3'>
                            kareem963221@mail.com
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Please Enter Your Name'
                                value=''
                                onChange={(e) => { }}
                            />
                        </div>
                        <div className='col-12 col-md-6'>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Please Enter Your Email'
                                value=''
                                onChange={(e) => { }}
                            />
                        </div>

                        <div className='col-12'>
                            <textarea
                                rows={5}
                                className='form-control'
                                placeholder='Please Enter Your Description'
                                value=''
                                onChange={(e) => { }}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className='profile-actions'>
                        <button type='submit' className='btn btn-secondary'>Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MainAccountComponent;
