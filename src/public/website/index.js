import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  About,
  Imstagran,
  Home,
  Loading,
  Menu,
  WorldFM,
  Yuotube,
  ContactForm,
} from './components';

class Website extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const {
      loading,
    } = this.state;
    const classNamePrefix = "website";

    return (
      <ParallaxProvider>

        <div className={classNamePrefix}>

          {!loading &&
          <Menu />}

          {loading &&
          <Loading />}
          
          {!loading &&
          <Home />}

          {!loading &&
          <WorldFM />}

          {!loading &&
          <Imstagran />}

          {!loading &&
          <Yuotube />}

          {!loading &&
          <About />}

          {!loading &&
          <ContactForm />}

        </div>

      </ParallaxProvider>
    )
  }
}

export default Website;
