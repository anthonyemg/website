import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'landing';
  
    return (
      <div className={classNamePrefix}>
        <span>Anthony Greenheck</span>
      </div>
    )
  }
}

export default Landing;