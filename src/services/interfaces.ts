import { Subject } from 'rxjs/Rx';

export interface ITodoService {
    Todos: Subject<ITodo[]>;
    Loading: Subject<boolean>;
    Load():void;
};
export interface ITodo {
    Id: number;
    Title: string;
    Description: string;
    Done: boolean;
}
