import React, { Component } from 'react';
import Link from 'gatsby-link';

class Page2 extends Component {
  render() {
    return (
      <div>
        <div>Hello aaa!</div>
        <Link to={'/'}>Page 1</Link>
      </div>
    );
  }
}

export default Page2;
