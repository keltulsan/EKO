import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../login_signup/LogiN";
import { useForm } from "react-hook-form";
import { GetFaq_ } from "../../api/GetFaq";
import React, { Component, useEffect, useState } from 'react';
import { ConditionListInfo } from "./conditioninfo"

export function ConditionListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = GetFaq_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalCondition} onHide={props.handleCloseModalCondition}>
        <Modal.Body>{info && info.map((info,key)=>{
            return <div key={info.id}><ConditionListInfo info={info}/></div>})}
        </Modal.Body>
        </Modal>}