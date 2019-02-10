import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayMenu: false,
    };
  }

  handleOnClick(className) {
    document.querySelector(`.${className}`).scrollIntoView({behavior: 'smooth'})
    this.setState({ displayMenu: false });
  }

  toggleDisplayMenu() {
    this.setState({ displayMenu: !this.state.displayMenu });
  }

  render() {
    const classNamePrefix = 'menu';
    const { displayMenu } = this.state;
  
    return (
      <div
        className={classNamePrefix}
        data-display-menu={displayMenu}
      >

        <button
          className={`${classNamePrefix}__button`}
          data-display-menu={displayMenu}
          onClick={() => this.toggleDisplayMenu()}
        >
          X
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('home')}
        >
          Home
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('world-fm')}
        >
          WorldFM
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('imstagran')}
        >
          Imstagran
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('yuotube')}
        >
          Yuotube
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('about')}
        >
          About
        </button>

        <button
          className={`${classNamePrefix}__section`}
          data-display-menu={displayMenu}
          onClick={() => this.handleOnClick('contact-form')}
        >
          Contact
        </button>


        <div
          className={`${classNamePrefix}__footer`}
          data-display-menu={displayMenu}
        >
          <a href="https://www.linkedin.com/in/anthonygreenheck/" target="_blank">linkedin</a>
          <a href="https://github.com/anthonyemg" target="_blank">github</a>
        </div>

      </div>
    )
  }
}

export default Menu;