import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { Nav, Form, FormControl, Button} from 'react-bootstrap';

import logo from './logo-white.png';
import './App.css';
import Modal from './components/modal';
import Home from "./pages/home";
import User from "./pages/user"
import AddApplication from './pages/addApplication';
import ViewApplication from './pages/viewApplications';
import EditApplication from './pages/editApplication';

function App() {

  const [showModal, setShowModal] = useState(false);

  const currentYear = new Date().getFullYear();

  const history = useHistory();
  // console.log(showModal)

  function signout() {
    // console.log("Signing Out")
    window.localStorage.removeItem('emailForSignin');
    window.localStorage.removeItem('userEmail');
    window.localStorage.removeItem('userID');
    window.location.reload();
    
  }

  return (
    <div className="App">
      <header className="">
        <div id="brand">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header">
          JAM
        </p>
        </div>

        <Nav id="nav" variant="" className="navGroup">
          <Nav.Link id="view" className="nav" href="/view">View App</Nav.Link>
          <Nav.Link className="nav" href="/add">Add App</Nav.Link>
        </Nav>
        <Form inline id="search-form" className="dispNone">
            <FormControl type="text" placeholder="Search" className="mr-sm-2 dispNone" />
            <Button className="dispNone" variant="outline-info">Search</Button>
        </Form>

      </header>

      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/view" component={ViewApplication} />
          <Route exact path="/add" component={AddApplication} />
          <Route exact path="/edit" component={EditApplication} />
        </Switch>
      </Router>
      
      <Modal showModal = {showModal} ></Modal>

      <footer className="footer">
        <Button 
          variant="white" 
          id="feedback"
          onClick={() => setShowModal(true)} >
            Leave Comment
          </Button>

          &copy; Copyright { currentYear }, All Rights Reserved

          <Button
            id="signout"
            onClick = {() => signout()}
            > Sign Out
          </Button>

      </footer>
    </div>
  );
}

export default App;
