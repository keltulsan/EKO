import { useForm } from "react-hook-form";
import { Update_ } from "../../components/update_acc/Update";
import React, { Component, useEffect, useState } from 'react';

export function UserListInfo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateUser = async (data) => {
        Update_(data)
        window.location.replace('/');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    return <form onSubmit={handleSubmit(onSubmitUpdateUser)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Mon Compte</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                    <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
            </div>
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- align-center">
                <input type="hidden" {...register("id")} value={props.info.id} />
                <input className='background my-account- margin-top--- margin-right--' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
                <input className='background my-account- margin-top---' {...register("nickname")} placeholder="Nom d'utilisateur" type="text" id="nickname" defaultValue={props.info.nickname} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account margin-top--- margin-right--' {...register("mail")} placeholder="Adresse E-mail" type="text" id="email" defaultValue={props.info.mail} />
                <input className='background my-account align-center margin-top---' {...register("country")} placeholder="Pays" type="text" id="country" defaultValue={props.info.country} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account align-center margin-top--- margin-right--' {...register("business_name")} placeholder="Entreprise" type="text" id="business" />
                <input className='background my-account align-center margin-top---' {...register("phone_number")} placeholder="Téléphone" type="text" id="phone-number" defaultValue={props.info.phone_number} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account align-center margin-top--- margin-right--' {...register("adress")} placeholder="Adresse" type="text" id="adress" defaultValue={props.info.adress} />
                <input className='background my-account align-center margin-top---' {...register("apartement")} placeholder="Appartement (falcultatif)" type="text" id="apartment" defaultValue={props.info.apartement} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account- margin-top--- margin-right--' {...register("code_postal")} placeholder="Code postal" type="text" id="code-postal" defaultValue={props.info.code_postal} />
                <input className='background my-account- margin-top---' {...register("city")} placeholder="Ville" type="text" id="city" defaultValue={props.info.city} />
            </div>
            <div className="flex2 margin-top--- align-center">
                <input className='background my-account align-center margin-top--- margin-right--' {...register("seller")} placeholder="seller (true, false)" type="text" id="seller" defaultValue={props.info.seller} />
                <input className='background my-account align-center margin-top---' {...register("admin")} placeholder="admin (true, false)" type="text" id="admin" defaultValue={props.info.admin} />
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier l'utilisateur" />
            </div>
        </div>
    </form>
}