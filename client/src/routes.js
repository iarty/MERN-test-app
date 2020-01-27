import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LinksPage from "./pages/LinksPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact component={LinksPage} />
        <Route path="/create" exact component={CreatePage} />
        <Route path="/detail/:id" component={DetailPage} />
        <Redirect to="/create" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" component={AuthPage} exact />
      <Redirect to="/" />
    </Switch>
  );
};
