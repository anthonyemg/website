import React, { Component } from 'react';

class Imstagran extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'imstagran';
  
    return (
      <div className={classNamePrefix}>
        <a href="http://imstagran.io/" target="_blank" class="project-title">Imstagran</a>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/imstagranMock.png' />
        </div>
      </div>
    )
  }
}

export default Imstagran;