import { Component } from 'react';
import { Modal } from './Modal/Modal';
import { Clock } from './Clock/Clock';
import css from '../components/Modal/Modal.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (mes) => toast(mes);


export class App extends Component {
  state = {
    showClock: false,
    showModal: false,
  };
  toggleClock = () => {
    this.setState(({ showClock }) => ({ showClock: !showClock }));    
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));  };

  render() {
    const { showModal, showClock } = this.state;

    return (
      <div
        className="container"
        style={{
          padding: '33px',
          textAlign: 'center',
        }}
      >
        {showClock ? (
          <Clock onClose={this.toggleClock}></Clock>
        ) : (
          <button
            type="button"
            onClick={this.toggleClock}
            className={css['modal-title']}
          >
            показать часы
          </button>
        )}

        <button
          type="button"
          onClick={this.toggleModal}
          className={css['modal-title']}
        >
          открыть модалку
        </button>
        <button
          type="button"
          onClick={() => notify('Toast Forever!!!')}
          className={css['modal-title']}
        >
          показать Notify
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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}
