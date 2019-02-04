import React, { Component } from 'react';

class WorldFM extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'world-fm';
  
    return (
      <div className={classNamePrefix}>
        <span>WorldFM</span>
      </div>
    )
  }
}

export default WorldFM;