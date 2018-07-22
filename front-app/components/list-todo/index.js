import React from 'react';
import Table from "../table";
import TodoService from "../../services/todo-service";

 class TodoList extends React.Component {



    constructor(props){
        super(props);
        this.state = {
            todos: [],
        }
    }

    componentDidMount(){

        const todoService = new TodoService();
        todoService.getTodos((res)=>{
            this.setState({
                todos: res
            })
        })
    }

    render() {
        return (
          <Table theadData={['#','title','start at']} tbodyData={this.state.todos}/>
        );
    }
}

export default TodoList;