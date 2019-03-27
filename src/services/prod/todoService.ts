import { Subject } from 'rxjs/Rx';

import { ITodoService, ITodo } from "../interfaces";

export class TodoService implements ITodoService {

    Todos: Subject<ITodo[]>;
    Loading: Subject<boolean>;

    constructor() {
        this.Todos = new Subject<ITodo[]>();
        this.Todos.next([]);
        this.Loading = new Subject<boolean>();
        this.Loading.next(false);
    }

    Load():void{
        throw "Not Implemented!"
    }
}