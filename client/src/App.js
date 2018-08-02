import React, { Component } from 'react';
import URLBox from './components/URLBox';
import StringBox from './components/StringBox';

class App extends Component {
  render() {
    return (
      <div>
        
        <StringBox/>
        <URLBox/>
        
      </div>
    );
  }
}

export default App;
