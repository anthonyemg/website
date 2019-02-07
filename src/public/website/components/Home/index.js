import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'home';
  
    return (
      <div className={classNamePrefix}>
        <span>THE PORTFOLIO OF</span>
        <span>Anthony Greenheck</span>
        <span>WEB DEVELOPER</span>
      </div>
    )
  }
}

export default Home;