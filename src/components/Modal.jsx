import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {createPortal} from 'react-dom'
const modalRef = document.getElementById('modal')

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onEscape)
    }


    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscape)
    }

    onEscape = (e) => {
            if (e.code === 'Escape') {
                this.props.toggleModal()
                console.log(e.code);
            }
    } 

    onOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.toggleModal()
        }
    }
    render() {
        console.log('this.props.children :>> ', this.props.children);
        return createPortal(<div onClick={this.onOverlayClick} className='overlay'>
            <div className='modal'>
                {this.props.children}
            </div>
        </div>, modalRef)
    }
}
export default Modal;