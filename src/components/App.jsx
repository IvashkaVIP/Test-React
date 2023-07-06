import { Component } from 'react';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <div
        className="container"
        style={{
          padding: '33px',
        }}
      >
        <button type="button" onClick={this.toggleModal}>
          открыть модалку
        </button>
        {showModal && (
          <Modal>
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