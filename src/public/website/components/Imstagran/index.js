import React, { Component } from 'react';

class Imstagran extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classNamePrefix = 'imstagran';
  
    return (
      <div className={classNamePrefix}>

        <div className={`${classNamePrefix}__header`}>
          <a href="http://imstagran.io/" target="_blank">Imstagran</a>
          <a href="https://github.com/anthonyemg/Imstagran" target="_blank">github</a>
        </div>

        <div className={`${classNamePrefix}__imageWrapper`}>
          <img src='../assets/imstagranMock.png' />
        </div>

      </div>
    )
  }
}

export default Imstagran;