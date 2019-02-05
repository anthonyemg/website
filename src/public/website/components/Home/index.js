import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'home';
  
    return (
      <div className={classNamePrefix}>
        <span>Anthony Greenheck</span>
      </div>
    )
  }
}

export default Home;