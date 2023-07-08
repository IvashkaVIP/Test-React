import { Component } from "react";

import './Clock.scss'
import css from '../Modal/Modal.module.css'

export class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      //  <div className="Clock__face">{this.state.time}</div>;
      <>
        <div className="Clock__face">{this.state.time}</div>
        <button
          type="button"
          onClick={this.props.onClose}
          className={css['modal-title']}
        >
          скрыть часы
        </button>
      </>
    );
  }
}