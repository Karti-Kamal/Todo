import React from 'react';
import Table from "../table";
import TodoService from "../../services/todo-service";

 class TodoList extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            todos: null,
        }
    }

    componentWillMount(){

        const todoService = new TodoService();
        todoService.getTodos((res)=>{
            this.setState({
                todos: res
            })
        })
    }

    render() {
        console.log('todoooooooooos', this.state.todos)
        return (
          <Table />
        );
    }
}

export default TodoList;