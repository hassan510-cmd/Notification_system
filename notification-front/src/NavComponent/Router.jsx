import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Createuser from "./Createuser";
import Form from "./Form";
import Nav from "./Nav";

export default function App() {
  return (
    <Router>
      <div className='container'>

        <Switch>

          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <div className='d-flex mt-3 justify-content-around'>
          <Link to='/' className='btn btn-success' >Home</Link>
          <Link to="/users" className='btn btn-primary'>Users</Link>
        </div>




      </div>
    </Router>
  );
}

function Home() {
  return <Nav />;
}

function Users() {
  return <Createuser />;
}