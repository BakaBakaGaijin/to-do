import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Header from "./header";

import { CategoriesList } from "./features/categories/CategoriesList";
import { AddCategoryForm} from "./features/categories/AddCategoryForm";

import { ItemsList } from "./features/items/ItemsList";
import { AddItemForm } from "./features/items/AddItemForm";
import "./App.css";

function App() {
  return (
          <div className="ToDo">
              <Router>
                  <Header />
                  <Switch>
                      <Route
                          path="/items"
                          render={() => (
                              <React.Fragment>
                                  <ItemsList />
                                  <AddItemForm />
                              </React.Fragment>
                          )}
                      />
                      <Route
                          path="/categories"
                          render={() => (
                              <React.Fragment>
                                  <CategoriesList />
                                  <AddCategoryForm />
                              </React.Fragment>
                          )}
                      />
                      <Redirect to="/items" />
                  </Switch>
              </Router>
          </div>
  );
}

export default App;
