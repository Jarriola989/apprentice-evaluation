import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import SuccessfulSubmit from './Components/SuccessfulSubmit';

class App extends Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={props => <Form {...props} />} />
          <Route path="/submitted" component={SuccessfulSubmit} />
        </BrowserRouter>
      </div>
    );
  } 
}

export default App;
