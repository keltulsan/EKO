import { useForm } from "react-hook-form";
import { Product_ } from "../Update_product/product";
import React, { Component, useEffect, useState } from 'react';

export function ProductListInfo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateProduct = async (data) => {
        Product_(data)
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
                <input type="hidden" {...register("id")} value={props.info.id} />
                <div className="flex gap">
                    <input className='background my-account- margin-top--- margin-right--' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
                    <input className='background my-account- margin-top---' {...register("price")} placeholder="Prix" type="text" id="Price" defaultValue={props.info.price} />
                </div>
                <input className='background my-account- margin-top---' {...register("link_name")} placeholder="Lien de la condition" type="hidden" id="Link-name" defaultValue={props.info.name.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")} />
                <div className="flex gap">
                    <input className='background my-account- margin-top---  margin-right--' {...register("seller_name")} placeholder="seller_name" type="text" id="seller_name" defaultValue={props.info.seller_name} />
                    <input className='background my-account- margin-top---' {...register("eko_score")} placeholder="eko_score" type="text" id="eko_score" defaultValue={props.info.eko_score} />
                </div>
                <input className='background my-account- margin-top---' {...register("img")} placeholder="Lien de l'image" type="text" id="Link-img" defaultValue={props.info.img} />
                <textarea className='background my-account margin-top--- ' {...register("desc")} placeholder="Description" type="textarea" id="message" name="message" defaultValue={props.info.desc} />
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Sauvegarder les changements" />
            </div>
        </div>
    </form>
}