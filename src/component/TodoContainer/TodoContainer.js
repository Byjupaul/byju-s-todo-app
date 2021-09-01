import React from "react";
import Header from "../Header/Header.js";
import Practice from "../Practice/Practice.js";
import TodoCount from "../TodoCount/TodoCount.js";
import TodoList from "../TodoList/TodoList.js";
import InputTodo from "../InputTodo/InputTodo.js";
import { v4 as uuidv4 } from "uuid";
import "./TodoContainer.css";
import AlertButton from "../Practice/AlertButton.js";
import { Route, Switch } from "react-router-dom";
import About from "../../Pages/About.js";
import NotMatch from "../../Pages/NotMatch.js";
import Navbar from "../../component/Navbar.js";
import Contact from "../../Pages/Contact.js";

class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  handleChange = (id) => {
    console.log("checkbox clicked:", id);

    //Wichtig: State niemals direkt ändern:
    //this.state.todos = []; // SO NICHT

    //Funktion zum Ändern des states
    //erwartet ein Object als Parameter

    //Schreibweise ohne Ternären Operator
    this.setState({
      todos: this.state.todos.map((todoObj) => {
        if (todoObj.id === id) {
          return {
            ...todoObj,
            completed: !todoObj.completed,
          };
        }
        return todoObj;
      }), // END of map
    });

    // Schreibweise mit Ternären Operator

    // this.setState({
    //   todos: this.state.todos.map( todoObj =>{
    //     return {
    //       ...todoObj,

    //       // invertiere completed (false wird true und true wird false)
    //       // wenn die ID des todoObj der id entspricht, die dem Handler (handleChange)
    //       // übergeben wurde
    //       completed: todoObj.id === id ? !todoObj.completed : todoObj.completed
    //     }
    //   })
    // });

    //❗Todo❗ in Zukunft: setState updater bzw callback benutzen
    // Warum? Siehe unten bei Erklärungen
  };

  addTodo = (title) => {
    console.log(title);

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [newTodo, ...this.state.todos],
    });

    // [...this.state.todos, newTodo]
    // kopiert sozusagen unser todosArray und fügt
    // unserer newTodo als erstes Element hinzu
  };

  delTodo = (id) => {
    // hier speichern wir das state-obj
    // in einer Variable

    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({ todos: newTodos });

    // Todo Zukunft: Hier eigentlich wieder besser: callback
    // function als Parameter für setState
  };
  componentDidMount() {
    fetch("http://localhost:3001/todos")
      .then(res => res.json())
      .then((jsonData) => {
        this.setState({
          todos: jsonData,
        });
      });
  }

  componentDidUpdate(previousProps, previousState) {
    // Erklärung zu componentDidUpdate siehe unten
    console.log(
      "%c componentDidUpdate aus TodoContainer asugeführt",
      "background: #bada55"
    );

    // arrays können nicht direkt miteinander verglichen werden
    // => if(previousState.todos !== this.state.todos) wäre IMMER true
    // Stattdessen: Arrays ins String umwandeln
    if (
      JSON.stringify(previousState.todos) !== JSON.stringify(this.state.todos)
    ) {
      // Hier ist es sinnvoll, die neuen Daten/State in einer Datenbank zu speichern
      // in unserem Fall in localStorage
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <div className="container">
              <div className="inner">
                <Header />
                <InputTodo addTodoProp={this.addTodo} />
                <TodoList
                  todosProp={this.state.todos}
                  handleChangeProp={this.handleChange}
                  delTodoProp={this.delTodo}
                />
                <TodoCount todosProp={this.state.todos} />
                {/* <Practice /> */}
              </div>
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </>
    );
  }
}

export default TodoContainer;

// ToDo Container umwandeln in Functional Component unter Verwendung
// von useEffekt-Hook: siehe https://ibaslogic.com/react-hooks-tutorial/#using-the-react-hooks-usestate
