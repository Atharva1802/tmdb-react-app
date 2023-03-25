import {Route, Switch} from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Details from '../pages/Details'


function Routes() {
  return (
    <Switch>
          <Route
              path='/:category/search:/keyword'
              component={Catalog}
          />
          <Route
              path='/:category/search:/keyword'
              component={Catalog}
          />
          <Route
              path='/:category/search:/keyword'
              component={Catalog}
          />
          <Route
              path='/:category/search:/keyword'
              component={Catalog}
          />
    </Switch>
  )
}
export default Routes