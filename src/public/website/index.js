import React, { Component } from 'react';
import {
  About,
  Imstagran,
  Home,
  Loading,
  Menu,
  WorldFM,
  Yuotube,
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

      </div>
    )
  }
}

export default Website;
