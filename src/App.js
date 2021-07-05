import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Backoffice from './components/backoffice';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <BrowserRouter>
          <Navbar/>
          <Backoffice/>
        </BrowserRouter>
      </React.Fragment> 
      );
  }
}
 
export default App;
