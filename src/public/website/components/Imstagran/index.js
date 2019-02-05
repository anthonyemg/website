import React, { Component } from 'react';

class Imstagran extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'imstagran';
  
    return (
      <div className={classNamePrefix}>
        <span>Imstagran</span>
      </div>
    )
  }
}

export default Imstagran;