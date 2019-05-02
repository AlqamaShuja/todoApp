import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './component/input';
import Button from './component/button'
import TodoList from './component/TodoList';

class App extends Component {

  state ={
    todos: [
            { id: 1, name: "Clothes"},
            { id: 2, name: "Watches"},
            { id: 3, name: "Mobile"},
            { id: 4, name: "Shoes"},
        ],
    newTodo: '',
    updateTodo: false,
    notification: null,
}

  handleChange = (event) => {
    this.setState({
      newTodo: event.target.value,
      notification: null,
    })
  }
  handleAddTodo = () => {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length-1] ? this.state.todos[this.state.todos.length-1].id + 1 : 1
    }

    const todos = this.state.todos;
    todos.push(newTodo);

    const notification = this.state.updateTodo ? 'Todo Updated Successfully' : 'Todo Added Successfully'
    this.handleNotification(notification);

    this.setState({
      todos,
      newTodo: "",
      updateTodo: false
    })

  }
  handleDelete = (id) => {
    const todos = this.state.todos.filter(item => item.id !== id)

    this.setState({
      todos,
      newTodo: ""
    })

    this.handleNotification("Todo Deleted Successfully");
  }
  handleUpdateTodo = (OldItem) => {
    const todos = this.state.todos.filter(item => item.id !== OldItem.id)

    if(OldItem){
      this.setState({
        newTodo: OldItem.name,
        todos,
        notification: null,
        updateTodo : true
      })
    }
    

  }
  handleNotification = (notification) => {
    
    this.setState({
      notification
    })
    
    setTimeout(() => {
      this.setState({ notification: null })
    }, 1000);

  }

  render(){
    
    return (
      <div className="App">
        <div className="container">
          <ul className="list-group">
            <h2 className="text-center p-4" >Todo list</h2>

           { this.state.notification && <div className='alert alert-success' >
              <p className='text-center'> { this.state.notification } </p>
            </div>
            }

            <Input type="text"
                   name="InputAddTodo"
                   value={this.state.newTodo}
                   placeholder="Add New Todo"
                   handleChange={this.handleChange}
            />

            <Button className="btn-info form-control m-2"
                    onClick={this.handleAddTodo}
                    disabled={this.state.newTodo.length === 0}
                    ButtonName={this.state.updateTodo ? 'Update Todo' : 'Add Todo'}
            />

            <TodoList updateTodo={this.state.updateTodo}
                      todos={this.state.todos}
                      handleUpdateTodo={this.handleUpdateTodo}
                      handleDelete={this.handleDelete}
            />
            
          </ul>
        </div>  
        
      </div>
    );
  }
}

export default App;
