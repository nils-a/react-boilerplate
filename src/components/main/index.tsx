import * as React from "react";
import { Subscription } from 'rxjs';
import { ITodoService, ITodo } from "../../services/interfaces";

import { TodoRow } from "./todoRow";

export interface MainProps {
    todoService: ITodoService;
}

interface MainState {
    loading: boolean;
    todos: ITodo[];
}

export class Main extends React.Component<MainProps, MainState> {
    private subsriptions: Subscription[] = [];

    constructor(props: MainProps) {
        super(props);
        this.state = {
            loading: true,
            todos: []
        };
    }

    componentDidMount() {
        this.subsriptions.push(this.props.todoService.Loading.subscribe((x) => {
            this.setState({
                loading: x
            });
        }));
        this.subsriptions.push(this.props.todoService.Todos.subscribe((x) => {
            this.setState({
                todos: x
            });
        }));
        this.props.todoService.Load();
    }
    
    componentWillUnmount() {
        this.subsriptions.forEach(s => {
            s.unsubscribe();
        });
        this.subsriptions = [];
    }

    render() {
        if(this.state.loading) {
            return (<span>Loading...</span>);
        }

        return (
            <ol>{
                this.state.todos.map(t => (<TodoRow key={t.Id} todo={t} />))
            }</ol>
        );
    }
}