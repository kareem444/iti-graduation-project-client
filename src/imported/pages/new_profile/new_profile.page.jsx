import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import PageRoutes from '../../../router/page_routes';
import AccountMenuComponent from './components/account/account_menu_component';
import MainAccountComponent from './components/account/main_account_component';
import MainMyOrdersComponent from './components/my_orders/main_my_orders_component';

const NewProfilePage = () => {
    const location = useLocation()

    const kareem = () => {
        if (location.pathname == PageRoutes.accountRoute.path) {
            return <MainAccountComponent />
        } else if (location.pathname == PageRoutes.myOrdersRoute.path) {
            console.log('kareem');
            
            return <MainMyOrdersComponent />
        }
    };

    return (
        <div className='customer content d-block my-3'>
            <Row>
                <Col xs='12' md='5' xl='3'>
                    <AccountMenuComponent />
                </Col>
                <Col xs='12' md='7' xl='9'>
                    <div className='panel-body'>
                        {kareem()}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default NewProfilePage;
