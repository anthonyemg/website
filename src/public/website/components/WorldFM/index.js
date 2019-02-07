import React, { Component } from 'react';

class WorldFM extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'world-fm';
  
    return (
      <div className={classNamePrefix}>
        <a href="http://worldfm.io/" target="_blank" class="project-title">WorldFM</a>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/worldFmMock.png' />
        </div>
      </div>
    )
  }
}

export default WorldFM;