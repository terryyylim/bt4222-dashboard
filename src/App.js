import React, { Component } from 'react';
import './App.css';

// import components
import NavBar from '../src/container/navbar'

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
        <header className="App-header"> 
        </header>
        <body className="chart-body">
          <NavBar />
        </body>
      </div>
    );
  }
}

export default App;