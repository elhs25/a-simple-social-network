import Feed from "../pages/feed/Feed";
import NotFoundPage from "../pages/no_match/404";

export const ROUTES = [
    {
        path: '/',
        exact: true,
        component: Feed,
    },
    // {
    //     title: 'Consumo',
    //     path: '/consumption/:nic',
    //     exact: true,
    //     component: ConsumptionPage,
    //     // private: true,
    // },
    {
        title: '404',
        path: '*',
        component: NotFoundPage,
    },

]