import React, { Component } from 'react';
import {
  Imstagran,
  Landing,
  Loading,
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

        {loading &&
        <Loading />}
        
        {!loading &&
        <Landing />}

        {!loading &&
        <WorldFM />}

        {!loading &&
        <Imstagran />}

        {!loading &&
        <Yuotube />}

      </div>
    )
  }
}

export default Website;
