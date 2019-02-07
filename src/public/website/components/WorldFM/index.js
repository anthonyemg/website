import React, { Component } from 'react';

class WorldFM extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'world-fm';
  
    return (
      <div className={classNamePrefix}>

        <div className={`${classNamePrefix}__header`}>
          <a href="http://worldfm.io/" target="_blank">WorldFM</a>
          <a href="https://github.com/anthonyemg/WorldFM" target="_blank">github</a>
        </div>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/worldFmMock.png' />
        </div>

      </div>
    )
  }
}

export default WorldFM;