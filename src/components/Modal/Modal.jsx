import React, {useState, useEffect, useRef} from 'react'

import PropTypes from 'prop-types'
import './modal.scss'

const Modal = props => {
    
    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(props.active)
    }, [props.active])
    

  return (
    <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
          {props.children}
    </div>
  )
}
Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModalContent = props => {
    const contentRef = useRef(null)
    const closeModal = () => {
        contentRef.current.parentNode.calssList.remove('active')
        if(props.onClose) props.onClose()
    }
    return (
        <div className="modal__content"></div>
    )
}
export default Modal