import { Component } from "react";

import './Timer.scss'
import css from '../Modal/Modal.module.css'

export class Timer extends Component{
    state = {
    time: new Date().toLocaleTimeString(),
    }
    
    componentDidMount() {
        setInterval(() => this.setState({time: new Date().toLocaleTimeString()}),1000)
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
              скрыть таймер
            </button>
          </>
        );
    }
}