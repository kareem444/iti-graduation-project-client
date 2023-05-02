import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'
import PageRoutes from '../../../../../router/page_routes'

const AccountMenuComponent = props => {
  const location = useLocation()

  return (
    <div className='panel-sidebar text-center'>
      <div className='list-group'>
        <a className='list-group-item disabled'>Account</a>
        <a className={
          'list-group-item ' +
          (location.pathname == PageRoutes.accountRoute.path &&
            'list-group-item-primary')
        }>
          <NavLink
            to={PageRoutes.profileRoute.path}
            activeClassName='active-link '
          >
            Account Details
          </NavLink>
        </a>
        <a
          className={
            'list-group-item ' +
            (location.pathname == PageRoutes.myOrdersRoute.path &&
              'list-group-item-primary')
          }
        >
          <NavLink
            to={PageRoutes.myOrdersRoute.path}
            activeClassName='active-link'
          >
            My Orders
          </NavLink>
        </a>
      </div>
    </div>
  )
}

export default AccountMenuComponent
