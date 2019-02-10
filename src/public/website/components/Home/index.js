import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    }, 0);
  }

  handleContactMeClick() {
    document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { mounted } = this.state;
    const classNamePrefix = 'home';
  
    return (
      <div className={classNamePrefix}>

        <span data-mounted={mounted}>THE PORTFOLIO OF</span>

        <span>Anthony Greenheck</span>

        <span data-mounted={mounted}>WEB DEVELOPER</span>

        <button onClick={() => this.handleContactMeClick()}>
          Contact me
        </button>

      </div>
    )
  }
}

export default Home;