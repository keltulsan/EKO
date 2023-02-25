import { useForm } from "react-hook-form";
import { InsertProduct_ } from "../../components/InsertProduct/product";
import React, { Component, useEffect, useState } from 'react';

export function ProductInsert(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateProduct = async (data) => {
        InsertProduct_(data)
        window.location.replace('/sells');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    return <form onSubmit={handleSubmit(onSubmitUpdateProduct)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Produits</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                    <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
            </div>
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- vertical align-center">
                <input className='background my-account- margin-top---' {...register("link_name")} placeholder="Lien de la condition" type="hidden" id="Link-name" defaultValue="bonjour" />
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("name")} placeholder="Nom" type="text" id="Nom-prenom" />
                    <input className='background my-account- margin-top---' {...register("price")} placeholder="Prix" type="text" id="Price" />
                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("quantity")} placeholder="Quantité" type="text" id="Quantity" />
                    <input className='background my-account- margin-top---' {...register("img")} placeholder="Lien de l'image" type="text" id="Link-img" />

                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("seller_name")} placeholder="seller_name" type="text" id="seller_name" />
                    <input className='background my-account- margin-top---' {...register("label_name")} placeholder="label_name" type="text" id="label_name" />
                </div>
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("eko_score")} placeholder="eko_score" type="text" id="eko_score" />
                    <input className='background my-account- margin-top---'  {...register("desc")} placeholder="Description" type="text" id="Description" />
                </div>
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Sauvegarder les changements" />
            </div>
        </div>
    </form>
}