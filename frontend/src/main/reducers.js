import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardFinancialReducer from '../financial/dashboard/dashboardFinancialReducer'

/*import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'
*/
import AuthReducer from '../auth/authReducer'

const rootReducer = combineReducers({
    dashboard: DashboardFinancialReducer,
   /* 
   DashboardReducertab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer, */
    auth: AuthReducer
})

export default rootReducer