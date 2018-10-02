import React from 'react';
import Layout from './Hoc/Layout';
import { Switch } from 'react-router-dom';

import PrivateRoute from './Components/AuthRoutes/PrivateRoutes';
import PublicRoute from './Components/AuthRoutes/PublicRoutes';

import Home from './Components/Home';
import SignIn from './Components/Signin';

import Dashboard from './Components/Admin/Dashboard';
import AdminProducts from './Components/Admin/Products';
import EditProducts from './Components/Admin/Products/EditProducts';
import AdminItems from './Components/Admin/Items';
import EditItems from './Components/Admin/Items/EditItems';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_items/edit_item"
          exact
          component={EditItems}
        />
        <PrivateRoute
          {...props}
          path="/admin_items/edit_item/:id"
          exact
          component={EditItems}
        />
        <PrivateRoute
          {...props}
          path="/admin_items"
          exact
          component={AdminItems}
        />
        <PrivateRoute
          {...props}
          path="/admin_products/edit_product"
          exact
          component={EditProducts}
        />
        <PrivateRoute
          {...props}
          path="/admin_products/edit_product/:id"
          exact
          component={EditProducts}
        />
        <PrivateRoute
          {...props}
          path="/admin_products"
          exact
          component={AdminProducts}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/sign_in"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
