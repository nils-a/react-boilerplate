import { Subject } from 'rxjs';

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
