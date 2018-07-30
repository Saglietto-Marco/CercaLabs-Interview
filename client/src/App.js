import React, { Component } from 'react';
import './App.css';
import URLBox from './components/URLBox';
import StringBox from './components/StringBox';

class App extends Component {
  render() {
    return (
      <div>
        <URLBox/>
        <StringBox/>
      </div>
    );
  }
}

export default App;
