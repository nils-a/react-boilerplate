import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import { TodoService } from "./services/mock/todoService";

const todoService = new TodoService();

window.setTimeout(() => {
    ReactDOM.render(
        <App todoService={todoService}  />,
        document.getElementById("app-app")
    );
}, 800);
