import { Route, Routes } from "react-router-dom";
import RoutsPath from "./page_routes";

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
        <Route
          path={RoutsPath.profileRoute.path}
          element={RoutsPath.profileRoute.component}
        />
        {/* <Route
          path={RoutsPath.editProfileRoute.path}
          element={RoutsPath.editProfileRoute.component}
        /> */}
        <Route
          path={RoutsPath.enterEmailRoute.path}
          element={RoutsPath.enterEmailRoute.component}
        />
        <Route
          path={RoutsPath.changePasswordRoute.path}
          element={RoutsPath.changePasswordRoute.component}
        />
        <Route
          path={RoutsPath.productDetails.path}
          element={RoutsPath.productDetails.component}
        />
        <Route
          path={RoutsPath.checkOutFirstStep.path}
          element={RoutsPath.checkOutFirstStep.component}
        />
        <Route
          path={RoutsPath.checkOutSecondStep.path}
          element={RoutsPath.checkOutSecondStep.component}
        />
        <Route
          path={RoutsPath.checkOutThirdStep.path}
          element={RoutsPath.checkOutThirdStep.component}
        />
        <Route
          path={RoutsPath.accountRoute.path}
          element={RoutsPath.accountRoute.component}
        />
        <Route
          path={RoutsPath.myOrdersRoute.path}
          element={RoutsPath.myOrdersRoute.component}
        />
      </Route>
      <Route
        path={RoutsPath.sellerDashboardLayout.path}
        element={RoutsPath.sellerDashboardLayout.component}
      >
        <Route index element={RoutsPath.sellerDashboard.component} />
        <Route
          path={RoutsPath.sellerProducts.path}
          element={RoutsPath.sellerProducts.component}
        />
        <Route
          path={RoutsPath.sellerAddProduct.path}
          element={RoutsPath.sellerAddProduct.component}
        />
        <Route
          path={RoutsPath.sellerEditProducts.path}
          element={RoutsPath.sellerEditProducts.component}
        />
        <Route
          path={RoutsPath.sellerProductDetails.path}
          element={RoutsPath.sellerProductDetails.component}
        />
        <Route
          path={RoutsPath.sellerOrders.path}
          element={RoutsPath.sellerOrders.component}
        />
        <Route
          path={RoutsPath.sellerOrderDetails.path}
          element={RoutsPath.sellerOrderDetails.component}
        />
        <Route
          path={RoutsPath.sellerCalender.path}
          element={RoutsPath.sellerCalender.component}
        />
      </Route>
    </Routes>

  );
}

export default MainRouter;
