import axios from "axios";
import { Subject } from 'rxjs';

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
        this.Loading.next(true);
        const callFactory = () => axios.get("https://baconipsum.com/api/?type=meat-and-filler&sentences=1&start-with-lorem=1");
        const promises = [
            callFactory(),
            callFactory(),
            callFactory(),
            callFactory(),
            callFactory()
        ];

        Promise.all(promises).then(r => {
            let id = 1;
            const answers = r.map(x => {
                const txt = x.data[0] as string;
                let title = txt;
                if(title.length > 10) {
                    title = title.substring(0,10);
                }

                return {
                    Title: title,
                    Description: txt,
                    Done: false,
                    Id: id++
                };
            });
            this.Todos.next(answers);
            this.Loading.next(false);
        });
    }
}