// import React from 'react'
// import './profile_page.css'

// const ProfilePage = () => {
//     return (
//         <div className='container py-4 mx-auto'>
//             <div className='row'>
//                 <div className='col-4'>
//                     <img
//                         height={"300px"}
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU"
//                         class="rounded float-left" />
//                 </div>
//                 <div className='col-8'>
//                     <h1 className='mt-3'>
//                         <strong>Kareem Ayman</strong>
//                     </h1>
//                     <h6>
//                         kareem9632221@fmdao.com
//                     </h6>

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ProfilePage

import React from 'react'
import './profile_page.css'

const ProfilePage = () => {
    return (
        <div className='container py-4 mx-auto'>
            <div className='bg-white shadow rounded overflow-hidden'>
                <div className='row flex-column gap-4'>
                    <div className='px-5 py-4 cover'>
                        <div className='profile-head row justify-content-center'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU'
                                alt='...'
                                className='img-thumbnail col-md-4 col-sm-5 col-6 col-lg-3 rounded-circle'
                            />
                        </div>
                    </div>
                    <div className='mt-5 text-black mx-aut text-center'>
                        <h4>Mark Williams</h4>
                        <p className='small'>kareem963221@gmail.com</p>
                    </div>
                </div>
                <div className='px-4 py-4'>
                    <h5 className='mb-3'>About</h5>
                    <div className='p-4 rounded shadow-sm bg-light'>
                        <p className='font-italic mb-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className='py-4 px-4'>
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                        <h5 className='mb-0'>Products</h5>
                    </div>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-6 mb-2 pr-lg-1'>
                            <div className='card h-100'>
                                <img
                                    src='https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                    alt=''
                                    className='card-img-top'
                                />
                                <div className='card-body'>
                                    <h6 className='card-title mb-0'>Photo title</h6>
                                    <p className='card-text text-muted'>Date taken</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-2 pr-lg-1'>
                            <div className='card h-100'>
                                <img
                                    src='https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                    alt=''
                                    className='card-img-top'
                                />
                                <div className='card-body'>
                                    <h6 className='card-title mb-0'>Photo title</h6>
                                    <p className='card-text text-muted'>Date taken</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-6 mb-2 pr-lg-1'>
                            <div className='card h-100'>
                                <img
                                    src='https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                                    alt=''
                                    className='card-img-top'
                                />
                                <div className='card-body'>
                                    <h6 className='card-title mb-0'>Photo title</h6>
                                    <p className='card-text text-muted'>Date taken</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
