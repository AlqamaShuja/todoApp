import React, { Component } from 'react';
import Button from './button'

class TodoList extends Component {

    render() { 
        const { updateTodo, todos, handleDelete, handleUpdateTodo } = this.props;
        return ( 
            <div>
                { !updateTodo  &&
                    <ul>
                    {
                      todos.map(item => {
                        return <li key={item.id} className="list-group-item" >{ item.name }
                                <Button className="btn btn-dark m-2"
                                        onClick={()=> handleUpdateTodo(item)}
                                        ButtonName="Update"
                                />
                                <Button className="btn btn-danger m-2"
                                        onClick={()=> handleDelete(item.id)}
                                        ButtonName="X"
                                /> 
                        </li>
                    })
                    }
                    </ul>
                }
              </div>
         );
    }
}
 
export default TodoList;