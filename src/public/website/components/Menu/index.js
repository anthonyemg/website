import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  handleOnClick(className) {
    document.querySelector(`.${className}`).scrollIntoView({behavior: 'smooth'})
  }

  render() {
    const classNamePrefix = 'menu';
  
    return (
      <div className={classNamePrefix}>

        <button
          onClick={() => this.handleOnClick('landing')}
        >
          Main
        </button>

        <button
          onClick={() => this.handleOnClick('world-fm')}
        >
          WorldFM
        </button>

        <button
          onClick={() => this.handleOnClick('imstagran')}
        >
          Imstagran
        </button>

        <button
          onClick={() => this.handleOnClick('yuotube')}
        >
          Yutube
        </button>
      </div>
    )
  }
}

export default Menu;