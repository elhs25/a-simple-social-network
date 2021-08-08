import Feed from '../pages/feed/Feed'
import NotFoundPage from '../pages/no_match/404'

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: Feed,
  },
  {
    title: '404',
    path: '*',
    component: NotFoundPage,
  },
]
