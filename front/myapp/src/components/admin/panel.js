import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UserListAdmin } from './userList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function PanelAdmin(props){
    const InputComponent = () => {
        const inputElement = React.useRef()
    
        return <input ref={inputElement} />
    }
    return <Modal  onExit={props.handleCloseModal}
    keyboard={true} show={props.showModal} onHide={props.handleCloseModal}>
          <Modal.Title><h1>Panel Admin</h1></Modal.Title>
          <div className='flex center margin-top-- margin-left--'>
            <div>
          <Link className='style-link'><p variant="primary" className='text' onClick={()=>{props.handleCloseModal();props.handleShowModalUser()}}>
            User list
          </p>
          </Link>
          <Link className='style-link'>
          <p variant="primary" className='text' onClick={()=>{props.handleCloseModal();props.handleShowModalBusiness();InputComponent.click()}}>
            Business list
            </p>
            </Link>
            <Link className='style-link'>
            <p variant="primary" className='text' onClick={()=>{props.handleCloseModal();props.handleShowModalFaq();InputComponent.click()}}>
            FAQ list
            </p>
            </Link>
            <Link className='style-link'>
            <p variant="primary" className='text' onClick={()=>{props.handleCloseModal();props.handleShowModalCondition();InputComponent.click()}}>
            Condition list
            </p>
            </Link>
            <Link className='style-link'>
            <p variant="primary" className='text' onClick={()=>{props.handleCloseModal();props.handleShowModalNews();InputComponent.click()}}>
            News list
            </p>
            </Link>
            </div>
            </div>
      </Modal>
}