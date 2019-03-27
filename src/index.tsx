import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { TodoService } from "./services/prod/todoService";

const todoService = new TodoService();

ReactDOM.render(
    <App todoService={todoService}  />,
    document.getElementById("app-app")
);
