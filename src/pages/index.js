import React, { Component } from 'react';
import Link from 'gatsby-link';

class App extends Component {
  render() {
    return (
      <div>
        <div>Hello world!</div>
        <Link to={'/page2/'}>Page 2</Link>
      </div>
    );
  }
}

export default App;
