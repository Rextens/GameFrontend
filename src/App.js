import Login from './components/Login'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <Login/>
  </div>
)


export default App;
