import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Login_ } from "../login_signup/LogiN";
import { Product_ } from "../Update_product/product";
import { useForm } from "react-hook-form";
import { GetProduct_ } from "../../api/GetProduct";
import React, { Component, useEffect, useState } from 'react';
import { ProductQuantity } from "./productQuantity"

export function ProductQuantitytAdmin(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [info, setInfo] = useState([]);
    const onSubmitUpdateProduct = async (data) => {
        Product_(data)
        // window.location.replace('/sells');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    let c = -1
    useEffect(() => {
        const info = GetProduct_();
        info
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    return <Modal animation={true} show={props.showModalProductQuantity} onHide={props.handleCloseModalProductQuantity}>
        <Modal.Body>
            <form onSubmit={handleSubmit(onSubmitUpdateProduct)} className="align-center flex vertical center" >
                <h1 className="title flex2 center margin-top--">Produits</h1>
                <div className="flex2 vertical center">
                    <div className="profils-account flex vertical center">
                        <div className="flex2 center">
                            <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                        </div>
                    </div>
                    <h2 className='title top left align-center'>Information</h2>
                    <div className="flex2 margin-top--- vertical align-center">
                        <input className='background my-account- margin-top---' {...register("quantity")} placeholder="Quantité" type="text" id="Quantity" defaultValue={props.info} />
                    </div>
                    <div className="flex2 center margin-top--">
                        <input type="submit" value="Sauvegarder les changements" />
                    </div>
                </div>
            </form>
        </Modal.Body>
    </Modal>
}