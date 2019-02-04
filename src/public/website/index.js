import React, { Component } from 'react';
import { Landing, Loading, WorldFM } from './components';

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

      </div>
    )
  }
}

export default Website;
