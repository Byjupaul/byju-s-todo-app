import React,{ Component } from "react";

const TodosContext = React.createContext();

const TodosProvider = TodosContext.Provider;
// const TodosConsumer = TodosContext.Consumer;

class MyContext extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    console.log('checkbox clicked:', id);


    this.setState({
      todos: this.state.todos.map(todoObj => {
        if (todoObj.id === id) {
          return {
            ...todoObj,
            completed: !todoObj.completed
          }
        }
        return todoObj;

      }) // END of map
    });
  }

  addTodo = (title) => {
    console.log(title);

    const newTodo = {
      id: 5,
      title: title,
      completed: false
    };
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });

    // [...this.state.todos, newTodo]
    // kopiert sozusagen unser todosArray und fügt
    // unserer newTodo als erstes Element hinzu
  }

  delTodo = (id) => {


    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });

    // Todo Zukunft: Hier eigentlich wieder besser: callback 
    // function als Parameter für setState
  }

  
  render() {
    return (
      <TodosProvider value={{
        ...this.state,
        handleChange: this.handleChange,
        delTodo: this.delTodo,
        addTodoItem: this.addTodo,
        }}>

        {this.props.children}
      </TodosProvider>
    )
  }
}

export { TodosContext, MyContext}