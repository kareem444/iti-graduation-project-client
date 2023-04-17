import { Route, Routes } from 'react-router-dom'
import RoutsPath from './page_routes'

function MainRouter() {
  return (
    <Routes>
      <Route
        path={RoutsPath.layoutRoute.path}
        element={RoutsPath.layoutRoute.component}
      >
        <Route index element={RoutsPath.homeRoute.component} />
        <Route
          path={RoutsPath.aboutRoute.path}
          element={RoutsPath.aboutRoute.component}
        />
        <Route
          path={RoutsPath.NoPageRoute.path}
          element={RoutsPath.NoPageRoute.component}
        />
      </Route>
    </Routes>
  )
}

export default MainRouter
