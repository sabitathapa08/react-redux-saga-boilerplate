import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

export default About;
