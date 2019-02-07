import React, { Component } from 'react';

class Yuotube extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'yuotube';
  
    return (
      <div className={classNamePrefix}>
        <a href="https://yuotubeio.herokuapp.com/" target="_blank" class="project-title">YuoTube</a>
      </div>
    )
  }
}

export default Yuotube;