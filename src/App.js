import React,{Component} from 'react';
import Todos from './todos'
import AddTodo from './addform'


class App extends Component{
  state={
    todos:[
      {id:1,content:'Buy Milk'},
      {id:2,content:'Learn LifeCycle'},
    ],
  }

  deletetodo = (id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id
    })
    this.setState({
      todos:todos,
    })
  }
  addTodo = (todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
 render(){
   return(
     <div className="container">
     <h1 className="center blue-text">Todo's</h1>
     <Todos todos={this.state.todos} deletetodo={this.deletetodo}/>
     <AddTodo addTodo={this.addTodo}/>
     </div>
   )
 }
}


export default App;
