import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal
          isOpen={!!props.isSelected} 
          onRequestClose={props.handleClearIsSelected}
          contentLabel="Selected Option" 
        >
        <h3>Option that was selected</h3>
        {props.isSelected && <p>{props.isSelected}</p>}
        <button onClick={props.handleClearIsSelected}>Let's do it!</button>
        </Modal>
    )
}

export default OptionModal;