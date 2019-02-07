import React, { Component } from 'react';

class Yuotube extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'yuotube';
  
    return (
      <div className={classNamePrefix}>

        <div className={`${classNamePrefix}__header`}>
          <a href="https://yuotubeio.herokuapp.com/" target="_blank">YuoTube</a>
          <a href="https://github.com/anthonyemg/yuotube" target="_blank">github</a>
        </div>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/yuoTubeMock.png' />
        </div>

      </div>
    )
  }
}

export default Yuotube;