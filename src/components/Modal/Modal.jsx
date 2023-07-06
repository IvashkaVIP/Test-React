import { Component } from 'react';
import css from './Modal.module.css'
import './Modal.scss'

export class Modal extends Component {
    
    render() {



        return (
            <>
                <h2 className={css['modal-title']}>Модалка</h2>
                <div className="Modal__backdrop">
                    <div className="Modal__content">{this.props.children}</div>
            
                </div>
            </>
        );
    }
}