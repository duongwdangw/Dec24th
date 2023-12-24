import React from "react";
import './ListTodo.scss';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' }

        ]
    }


    render() {
        let { listTodos } = this.state;
        //let listTodos = this.state.listTodos;

        return (
            <>
                <div className="list-todo-container">
                    <div className="add-todo">
                        <input type="text" />
                        <button className="button">Add</button>
                    </div>
                </div>

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child">
                                    <span>Todo 1</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }




                </div>
            </>
        )
    }

}

export default ListTodo;