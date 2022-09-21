import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./home";
import { RecipeSearchPage } from "./recipes";
import { ShoppingListPage } from "./shopping-list";
import { AddIngredientPage } from "./ingredients";

const routes = [
  {
    path: "/",
    Component: HomePage,
    exact: true,
  },
  {
    path: "/recipes",
    Component: RecipeSearchPage,
  },
  {
    path: "/shopping-list",
    Component: ShoppingListPage,
  },
  {
    path: "/add-ingredient",
    Component: AddIngredientPage,
  },
];

export const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact}>
          <route.Component />
        </Route>
      ))}
    </Switch>
  </Router>
);
