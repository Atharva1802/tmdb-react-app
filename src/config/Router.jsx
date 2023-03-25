import {Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Details from '../pages/Details'


function Router() {
  return (
    <Routes>
            <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
                path='/:category/:id'
                component={Details}
            />
            <Route
                path='/:category'
                component={Catalog}
            />
            <Route
                path='/'
                element={<Home/>}
            />
        </Routes>
    );
}

export default Router;