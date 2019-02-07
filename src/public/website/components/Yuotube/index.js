import React, { Component } from 'react';

class Yuotube extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'yuotube';
  
    return (
      <div className={classNamePrefix}>
        <a href="https://yuotubeio.herokuapp.com/" target="_blank">YuoTube</a>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/yuoTubeMock.png' />
        </div>
      </div>
    )
  }
}

export default Yuotube;