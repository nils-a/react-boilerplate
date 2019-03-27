import * as React from "react";
import { ITodo } from "../../services/interfaces";


export interface TodoRowProps {
    todo: ITodo;
}

export const TodoRow = (p:TodoRowProps) => (
    <li><span className={"todo" + (p.todo.Done ? " done" : "" ) } title={p.todo.Description}>{p.todo.Title}</span></li>
);