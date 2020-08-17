import React, {useState} from 'react';
// USE HashRouter vs BrowserRouter to display on G
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Nav, Form, FormControl, Button} from 'react-bootstrap';

import logo from './logo-white.png';
import './App.css';
import Modal from './components/modal';
import Home from "./pages/home";
import AddApplication from './pages/addApplication';
import ViewApplication from './pages/viewApplications';
import EditApplication from './pages/editApplication';

function App() {

  const [showModal, setShowModal] = useState(false);

  const currentYear = new Date().getFullYear();

  console.log(showModal)

  return (
    <div className="App">
      <header className="">
        <div id="brand">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-header">
          JAM
        </p>
        </div>

        <Nav variant="" className="nav">
          <Nav.Link id="view" className="nav" href="/jam/#/view">View App</Nav.Link>
          <Nav.Link className="nav" href="/jam/#/add">Add App</Nav.Link>
        </Nav>
        <Form inline id="search-form">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>

      </header>

      <Router >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/view" component={ViewApplication} />
          <Route exact path="/add" component={AddApplication} />
          <Route exact path="/edit" component={EditApplication} />
        </Switch>
      </Router>
      
      <Modal showModal = {showModal} ></Modal>
      
      <footer className="footer">
        &copy; Copyright { currentYear }, All Rights Reserved
        <Button 
          variant="white" 
          id="feedback"
          onClick={() => setShowModal(true)} >Leave Comment</Button>

      </footer>
    </div>
  );
}

export default App;
