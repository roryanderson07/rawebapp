import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import GuestAdd from "./components/guestbook-add.component";
import GuestBook from "./components/guestbook.component";
import Home from "./components/home.component";

class App extends Component{
  render() {
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.linkedin.com/in/rory-anderson-1b3080181" target="_blank" rel="noopener noreferrer">
               <img src={logo} className="App-logo" alt="logo" /> 
            </a>
            <Link to="/" className="navbar-brand">About Rory</Link>
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/GB" className="nav-link">View Guestbook</Link>
              </li>
              <li className="navbar-item">
                <Link to="/GB/Create" className="nav-link">Sign Guestbook</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Todos" className="nav-link">View Todo's</Link>
              </li>
              <li className="navbar-item">
                <Link to="/Todos/Create" className="nav-link">Create Todo</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/Todos" exact component={TodosList} />
          <Route path="/Todos/edit/:id" component={EditTodo} />
          <Route path="/Todos/create" component={CreateTodo} />
          <Route path="/GB" exact component={GuestBook} />
          <Route path="/GB/Create" component={GuestAdd} />
          <Route path="/About" component={Home} />
        </div>
     </Router>
    )
  }
}



export default App;
