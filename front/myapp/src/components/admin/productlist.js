import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../login_signup/LogiN";
import { useForm } from "react-hook-form";
import { GetProduct_ } from "../../api/GetProduct";
import React, { Component, useEffect, useState } from 'react';
import { ProductListInfo } from "./productinfo"

export function ProductListAdmin(props){
    const [info,setInfo]=useState([]);
    useEffect(() => {
        const info = GetProduct_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalProduct} onHide={props.handleCloseModalProduct}>
        <Modal.Body>{info && info.map((info,key)=>{
            return <div key={info.id}><ProductListInfo info={info}/></div>})}
        </Modal.Body>
        </Modal>}