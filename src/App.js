import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// import components
import NavBar from '../src/container/navbar'
import LandingPage from './components/landing/landing';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "test"
    }
  }

  componentDidMount() {
    console.log(this.state.current);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={NavBar} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
