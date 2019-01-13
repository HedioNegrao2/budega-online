import React from 'react'
import { Switch, Route, Redirect } from 'react-router'


import DashboardFinancial from '../financial/dashboard/dashboardFinacial'
import DashboardSeles from '../sales/dashboard/dashboardSales'

export default props => (
    <div className='content-wrapper'>
        <Switch>  
            <Route exact path='/' component={DashboardFinancial} />
            <Route path='/billingCycles' component={DashboardSeles} />
            <Redirect from='*' to='/' />
           
        </Switch> 
    </div>
)


