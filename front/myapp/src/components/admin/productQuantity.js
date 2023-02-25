import { useForm } from "react-hook-form";
import {Product_ } from "../Update_product/product";
import React, { Component, useEffect, useState } from 'react';

export async function ProductQuantity(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateProduct = async (data) => {
        Product_(data)
        // window.location.replace('/sells');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    return <form onSubmit={handleSubmit(onSubmitUpdateProduct)} className="align-center flex vertical center" >
        {console.log(props.info)}
        <h1 className="title flex2 center margin-top--">Produits</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                    <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
            </div>
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <input className='background my-account- margin-top---' {...register("quantity")} placeholder="Quantité" type="text" id="Quantity" defaultValue={props.info}/>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Sauvegarder les changements" />
            </div>
        </div>
    </form>
}