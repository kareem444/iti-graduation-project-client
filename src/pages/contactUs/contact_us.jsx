import React from 'react'
import "../../Styling/contact.css"
import { useForm } from "react-hook-form";

const Contact_us = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegistration = (data) => console.log(data);
    const handleError = (errors) => { console.log(`errors`, errors);};
    const registerOptions = {
        name: { required: "Name is required",
        minLength: {
            value: 3,
            message: "Name must have at least 3 characters"
        },maxLength: {
            value: 20,
            message: "Name Max length 20 characters"
        } ,
        pattern:{
            value:/^[a-zA-Z]+(([_\][a-zA-Z ])?[a-zA-Z]*)*$/,
            message:"Accept _ and space"
        }
    },
    email: { required: "Email is required",
        pattern:{
            value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:"Enter Valid Email"
        }
     },
     phone: { required: "Phone is required",
        pattern:{
            value:/^01[0-9]{9}$/,
            message:"Enter Valid Phone Number"
        }},
     subject: { required: "Subject is required",minLength: {
        value: 3,
        message: "Message must have at least 3 characters"
    },maxLength: {
        value: 250,
        message: "Message Max length 30 characters"
    } },
     message: { required: "Message is required",
     minLength: {
        value: 5,
        message: "Message must have at least 5 characters"
    },maxLength: {
        value: 250,
        message: "Message Max length 250 characters"
    } 
    },


    };
  return (
    <>
    <div className='container'>
  <div className="row justify-content-center mt-4">
    <div className="col-lg-9">
      <h1 className="mb-4 text-center interFont fs-1 ">Contact Us</h1>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="your-name" className="form-label">Name<span className="text-danger">*</span></label>
            <input type="text" className="form-control" {...register('name' , registerOptions.name)} id="your-name" name="your-name" />
            <small className="text-danger">
                {errors?.name && errors.name.message}
            </small>
          </div>
          <div className="col-md-6">
            <label htmlFor="your-phone" className="form-label">Phone<span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="your-phone" {...register('phone' , registerOptions.phone)}/>
            <small className="text-danger">
                {errors?.phone && errors.phone.message}
            </small>
          </div>
          <div className="col-md-6">
            <label htmlFor="your-email" className="form-label">Email<span className="text-danger">*</span></label>
            <input type="email" className="form-control" {...register('email' , registerOptions.email)} id="your-email" />
            <small className="text-danger">
                {errors?.email && errors.email.message}
            </small>
          </div>
          <div className="col-md-6">
            <label htmlFor="your-subject" className="form-label">Subject<span className="text-danger">*</span></label>
            <input type="text" className="form-control" id="your-subject" {...register('subject' , registerOptions.subject)}/>
            <small className="text-danger">
                {errors?.subject && errors.subject.message}
            </small>
          </div>
          <div className="col-12">
            <label htmlFor="your-message" className="form-label">Message<span className="text-danger">*</span></label>
            <textarea className="form-control" id="your-message" {...register('message' , registerOptions.message)} rows="5" ></textarea>
            <small className="text-danger">
                {errors?.message && errors.message.message}
            </small>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-md-6">
                <button data-res="<?php echo $sum; ?>" type="submit" className="btn primarybg text-light w-100 fw-bold" >Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
    </>
  )
}

export default Contact_us