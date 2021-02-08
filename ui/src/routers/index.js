import Index from "../pages/index"
import NotFound from "../pages/404"
import Installer from "../pages/installer"

export default [
    {
        layout: 'default',
        path: '/',
        page: Index,
    },
    {
        path: '/installer',
        layout: 'default',
        page: Installer,
    },

    // 404 page
    {
        layout: 'default',
        page: NotFound,
    }
]