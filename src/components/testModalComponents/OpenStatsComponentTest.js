import React, { Component } from 'react';
import Modal from '../testModalComponents/Modal';

class Stats extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showStats = this.showStats.bind(this);
    this.hideStats = this.hideStats.bind(this);
  }

  showStats = () => {
    this.setState({show: true});
  }

  hideStats = () => {
    this.setState({show: false});
  }

  render() {
    return (
      <main>
        <h1>Stats Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideStats}>
          <p>Passing Children shows what is within the Modal tag.</p>
        </Modal>
        <button type='button' onClick={this.showStats}>
          Show Stats
        </button>
      </main>
    )
  }

}

export default Stats;
