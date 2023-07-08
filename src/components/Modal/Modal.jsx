import { Component } from 'react';

import './Modal.scss';

export class Modal extends Component {
  
  componentDidMount() {
    //console.log(this.props);
    console.log('Modal >>> DidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal >>> WillUnmount');
  window.removeEventListener('keydown',this.handleKeyDown)
}

  handleKeyDown = ({ code }) => {
    if (code === 'Escape'){
      console.log('Modal >>> handleKeyDown : Escape')
      this.props.onClose();
  }
  }

  render() {
    return (
      <>
        <div className="Modal__backdrop">
          <div className="Modal__content">{this.props.children}</div>
        </div>
      </>
    );
  }
}
