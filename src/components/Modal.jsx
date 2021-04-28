import React, {  useEffect } from 'react'
import {createPortal} from 'react-dom'
const modalRef = document.getElementById('modal')


const Modal = (props) => {

    useEffect(() => {
        window.addEventListener('keydown', onEscape)
        return function cleanUp() {
            window.removeEventListener('keydown', onEscape)
        }
    }, [])

    const onEscape = (e) => {
            if (e.code === 'Escape') {
                props.toggleModal()
            }
    }

    const onOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            props.toggleModal()
        }
    }

    return createPortal(<div onClick={onOverlayClick} className='overlay'>
            <div className='modal'>
                {props.children}
            </div>
        </div>, modalRef)
}
export default Modal;