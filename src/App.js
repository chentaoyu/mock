import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReportDetail from './detail';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  get title() {
    return <h2>运营报表</h2>;
  }

  get actions() {
    return [];
  }

  render() {
    return <ReportDetail />;
  }
}

export default App;
