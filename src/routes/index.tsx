import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ROUTES } from './routes'
import ScrollToTop from '../hooks/ScrollToTop'
import { PageTitle } from '../components/page_title/PageTitle'

export const PageRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {ROUTES.map((route, i) => (
          <RouteWithSubRoutes key={`sub_route_${i}`} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={(props) => (
        <>
          <PageTitle title={route.title} />
          {/* we can pass the sub-routes down to keep nesting */}
          <route.component {...props} routes={route.routes} />
        </>
      )}
    />
  )
}
