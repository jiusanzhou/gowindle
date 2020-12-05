import Index from "../pages/index"
import NotFound from "../pages/404"
import Installer from "../pages/installer"

export default [
    {
        path: '/',
        layout: 'default', // { name: 'default' }
        page: Index,
    },
    {
        path: '/installer',
        layout: 'minimal',
        page: Installer,
    },

    // 404 page
    {
        layout: 'default',
        page: NotFound,
    }
]