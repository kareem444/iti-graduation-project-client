import React from 'react';
import "./enter_email.css"
import { Link } from 'react-router-dom';
import PageRoutes from '../../router/page_routes';
const EnterEmailPage = () => {
    return (
        <div class="container">
            <div class="row justify-content-center h-100 align-items-center">
                <div class="col-md-4 col-md-offset-4">
                    <div class="text-center">
                        <img src="https://t3.ftcdn.net/jpg/05/26/72/48/360_F_526724825_fEKkOFrsAnTBW3G5Qc9VCZxArl3zWEdT.jpg" width="180" class="img-thumbnail rounded-circle" />
                        <h3 class="text-center my-4">Enter your email</h3>
                        <div class="panel-body">
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                Incorrect Email Address!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            <fieldset>
                                <input class="my-3 form-control input-lg" placeholder="E-mail Address" name="email" type="email" />
                                <Link class="btn btn-lg btn-primary btn-block w-100" to={PageRoutes.changePasswordRoute.path}>Continue</Link>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EnterEmailPage;
