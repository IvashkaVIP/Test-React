import { Component } from 'react';

import './Modal.scss';

export class Modal extends Component {
  
    componentDidMount() {
    //console.log(this.props);
    window.addEventListener('keydown', evt => {
      //console.log('Событие Нажатие :>>>   ', evt);
        //console.log(evt.code);
        this.props.onClose(); 
                
    });
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
