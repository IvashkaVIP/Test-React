import { Component } from 'react';
import { Modal } from './Modal/Modal';
import {Timer} from './Timer/Timer' 
import css from '../components/Modal/Modal.module.css'

export class App extends Component {
  state = {
    showTime: false,
    showModal: false,
  };
  toggleTimer = () => {
    // console.log('toggleModal before', this.state)

    this.setState(({ showTime }) => ({ showTime: !showTime }));

    // console.log('toggleModal after', this.state);
  };
  toggleModal = () => {
    // console.log('toggleModal before', this.state)

    this.setState(({ showModal }) => ({ showModal: !showModal }));

    // console.log('toggleModal after', this.state);
  };

  render() {
    const { showModal, showTime } = this.state;

    return (
      <div
        className="container"
        style={{
          padding: '33px',
          textAlign: 'center',
        }}
      >
        {showTime ? (
          <Timer onClose={this.toggleTimer}></Timer>
        ) : (
          <button
            type="button"
            onClick={this.toggleTimer}
            className={css['modal-title']}
          >
            показать таймер
          </button>
        )}

        <button
          type="button"
          onClick={this.toggleModal}
          className={css['modal-title']}
        >
          открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h2>Это props.children модалки</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              sunt eius ex mollitia odit soluta, molestiae cupiditate dolores
              aperiam facilis. Cumque, qui in. Asperiores sequi possimus
              temporibus. Quas, error veritatis!
            </p>
            <button type="button" onClick={this.toggleModal}>
              закрыть модалку
            </button>
          </Modal>
        )}

        {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div> */}
      </div>
    );
  }
}
