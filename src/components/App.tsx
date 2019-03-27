import * as React from "react";
import { Route, BrowserRouter as Router, Redirect, Switch, NavLink } from "react-router-dom";

import { Main } from "./main";
import { ITodoService } from "../services/interfaces";


import "./app.scss";

export interface AppProps {
    todoService: ITodoService;
}

export const Routes = {
    Main: "/Main"
}

export const App = (props: AppProps) => (
    <Router>
            <div>
                <nav>
                    <NavLink to={Routes.Main} activeClassName="active">Main</NavLink>
                    <NavLink to={"http://google.de"} activeClassName="active">Google</NavLink>
                </nav>
                <Switch>
                    <Redirect from="/" exact={true} to={Routes.Main} />
                    <Route path={Routes.Main}>
                        <h1>Hallo, Welt</h1>
                    </Route>
                </Switch>
            </div>
    </Router>
);
