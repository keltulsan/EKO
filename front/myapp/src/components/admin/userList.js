import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../../components/login_signup/LogiN";
import { useForm } from "react-hook-form";
import { Update_ } from "../../components/update_acc/Update";
import React, { Component, useEffect, useState } from 'react';
import { UserListInfo } from "./userinfo"

export function UserListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = Login_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalUser} onHide={props.handleCloseModalUser}>
        <Modal.Body>{info && info.map((info,key)=>{
            return <div key={info.id}><UserListInfo info={info}/></div>})}
        </Modal.Body>
        </Modal>}