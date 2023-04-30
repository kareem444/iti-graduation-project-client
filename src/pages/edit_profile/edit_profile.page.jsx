import React from 'react'
import './edit_profile.css'
import '../../router/page_routes'
import PageRoutes from '../../router/page_routes'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../custom_hooks/use_auth'
import { useForm } from 'react-hook-form'
import { RepoUpdateMyProfile } from '../../repositories/user.repo'
import { Button } from '@mui/material'
import { useEffect } from 'react'

const EditProfilePage = () => {
    const { authData, isAuth } = useAuth()
    const { mutate } = RepoUpdateMyProfile()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate(PageRoutes.homeRoute.path)
        }
    }, [isAuth])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        values: {
            name: authData?.name ?? '',
            email: authData?.email ?? '',
            bio: authData?.bio ?? ''
        }
    })

    const handleRegistration = data => mutate(data)
    const handleError = errors => {
        console.log(`errors`, errors)
    }

    const registerOptions = {
        name: { required: 'Name is required' },
        email: { required: 'Email is required' }
    }

    return (
        <div className='container-xl px-4 mt-4'>
            <h1 className='text-center my-3'>Edit Profile</h1>
            <hr className='mt-0 mb-4' />
            <div className='row'>
                <div className='col-xl-4'>
                    <div className='card mb-4 mb-xl-0'>
                        <div className='card-header'>Profile Picture</div>
                        <form
                            className='card-body text-center'
                            onSubmit={() => console.log('dawawd')}
                        >
                            <img
                                className='img-account-profile rounded-circle mb-2'
                                src={
                                    authData?.avatar ??
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDXECBv76wa78obNrJNqayP3o7cy4RaZNg_l_YuhSzP6qoWuHr6BTtn8JgNuHFVmSaf4&usqp=CAU'
                                }
                                alt=''
                            />
                            <div className='small font-italic text-muted mb-4'>
                                JPG or PNG no larger than 5 MB
                            </div>
                            <Button variant='contained' component='label' type='submit'>
                                <span className='text-white'>Upload File</span>
                                <input
                                    type='file'
                                    hidden
                                    accept='image/*'
                                    onChange={e => {
                                        mutate({ file: e.target.files[0] })
                                    }}
                                />
                            </Button>
                        </form>
                    </div>
                    {/* <div className='text-center mt-3'>
                        <Link to={PageRoutes.enterEmailRoute.path} className='btn btn-primary'>
                            Reset password
                        </Link>
                    </div> */}
                </div>
                <div className='col-xl-8'>
                    <div className='card mb-4'>
                        <div className='card-header'>Account Details</div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                                <div className='row gx-3 mb-3'>
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputOrgName'>
                                            Name
                                        </label>
                                        <input
                                            className='form-control'
                                            id='inputOrgName'
                                            type='text'
                                            placeholder='Enter your name'
                                            {...register('name', registerOptions.name)}
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className='small mb-1' htmlFor='inputLocation'>
                                            Email
                                        </label>
                                        <input
                                            className='form-control'
                                            id='inputLocation'
                                            type='email'
                                            placeholder='Enter your email'
                                            {...register('email', registerOptions.email)}
                                        />
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label className='small mb-1' htmlFor='inputEmailAddress'>
                                        Description
                                    </label>
                                    <textarea
                                        className='form-control'
                                        rows='6'
                                        placeholder='Enter description about your self'
                                        {...register('bio')}
                                    />
                                </div>
                                <div className='col-12 text-center'>
                                    <button
                                        className='btn primarybg text-white w-50'
                                        type='submit'
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfilePage
