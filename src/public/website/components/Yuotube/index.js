import React, { Component } from 'react';

class Yuotube extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'yuotube';
  
    return (
      <div className={classNamePrefix}>
        <span>Yuotube</span>
      </div>
    )
  }
}

export default Yuotube;