import React from 'react';
import background from '../../imported/images/bg-01.jpg'
import aboutImage1 from '../../imported/images/about-01.jpg'
import aboutImage2 from '../../imported/images/about-02.jpg'
import './about.css'
import { useLang } from '../../custom_hooks/use_get_current_language'

const AboutPage = () => {   
    const {translate} = useLang();
    
    return (
            <div className='Container'>
                <section
                    className="bg-img1 txt-center p-lr-15 p-tb-92 contact__bk d-flex justify-content-center align-items-center"
                    style={{ backgroundImage: 'url(' + background + ')',height:"40vh" }}
                >
                    <h2 className="ltext-105 cl0 txt-center mt-lg-5">
                        {translate('About_title')}
                        </h2>
                </section>
                <section className="bg0 p-t-75 p-b-120 px-5">
                    <div className="container">
                        <div className="row p-b-148">
                            <div className="col-md-6 col-lg-7 ">
                                <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                                    <h3 className="mtext-111 cl2 p-b-16 ">
                                        {translate("About_firstSecTitle")}
                                    </h3>
                                    <p className="stext-113 cl6 p-b-26 ">
                                        {translate("About_firstSecbody")}
                                    </p>
                                </div>
                            </div>
                            <div className="col-11 col-md-5 col-lg-4  m-lr-auto">
                                <div className="how-bor1 ">
                                    <div className="hov-img0">
                                        <img src={aboutImage1} alt="IMG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="order-md-2 col-md-6 col-lg-7 me-5 p-b-30">
                                <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                                    <h3 className="mtext-111 cl2 p-b-16">
                                        {translate("About_secnodSecTitle")}
                                        </h3>
                                    <p className="stext-113 cl6 p-b-26">
                                        {translate("About_secnodSecBody")}
                                    </p>
                                </div>
                            </div>
                            <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto ms-5 p-b-30">
                                <div className="how-bor2">
                                    <div className="hov-img0">
                                        <img src={aboutImage2} alt="IMG" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    );
}

export default AboutPage;
