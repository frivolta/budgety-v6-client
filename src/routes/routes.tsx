import Dashboard from '../pages/Dashboard'
import Unprotected from '../pages/Unprotected'

export const routes = {
    dashboard: {
        name: 'Dashboard',
        path: '/dashboard',
        component: Dashboard,
    },
    unprotected: {
        name: 'Unprotected',
        path: '/login',
        component: Unprotected,
    },
}
