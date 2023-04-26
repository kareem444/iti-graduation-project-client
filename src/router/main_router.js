import { Route, Routes } from "react-router-dom";
import RoutsPath from "./page_routes";

function MainRouter() {
  return (
    <Routes>
      <Route
        path={RoutsPath.layoutRoute.path}
        element={RoutsPath.layoutRoute.component}
      >
        <Route
          index
          element={RoutsPath.homeRoute.component}
        />
        <Route
          path={RoutsPath.aboutRoute.path}
          element={RoutsPath.aboutRoute.component}
        />
        <Route
          path={RoutsPath.NoPageRoute.path}
          element={RoutsPath.NoPageRoute.component}
        />
        <Route
          path={RoutsPath.signINRoute.path}
          element={RoutsPath.signINRoute.component}
        />
        <Route
          path={RoutsPath.signUpRoute.path}
          element={RoutsPath.signUpRoute.component}
        />
        <Route
          path={RoutsPath.contactUsRoute.path}
          element={RoutsPath.contactUsRoute.component}
        />
        <Route
          path={RoutsPath.productsRoute.path}
          element={RoutsPath.productsRoute.component}
        />
        <Route
          path={RoutsPath.checkoutRoute.path}
          element={RoutsPath.checkoutRoute.component}
        />
      </Route>
    </Routes>
  );
}

export default MainRouter;
