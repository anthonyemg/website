import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'about';
  
    return (
      <div className={classNamePrefix}>
        <span>About</span>
      </div>
    )
  }
}

export default About;