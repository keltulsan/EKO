import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UpdateBusiness_ } from "../../components/update_acc/UpdateBusiness";
import { ReactSession } from 'react-client-session';
import { Login_Business_ } from "../../components/login_signup/LogiNBusiness";

export function EnterprisePage(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateUser = async (data) => {
        UpdateBusiness_(data)
        window.location.replace('/');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
    });
    return props.info ? <div className="flex vertical">
        <form onSubmit={handleSubmit(onSubmitUpdateUser)} className="align-center flex vertical center" >
            <h1 className="title flex center margin-top--">Mon Entreprise</h1>
            <div className="flex vertical gap center">
                <div className='flex2 center vertical'>
                    <div className="profils-account align-center ">
                        <img className={"img-modal " + (dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                    </div>
                    <h2 className='title top left align-center'>Information</h2>
                    <div className="flex gap-vw align-center">
                        <input type="hidden" {...register("id")} value={props.info.id} />
                        <input className='background my-account- margin-top--- margin-right--' {...register("name")} placeholder="Nom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
                        <input className='background my-account- margin-top---' {...register("activity")} placeholder="Activité" type="text" id="nickname" defaultValue={props.info.activity} />
                    </div>
                    <div className="flex align-center">
                        <input className='background my-account align-center margin-top--- margin-right--' {...register("business_adress")} placeholder="Adresse" type="text" id="adress" defaultValue={props.info.business_adress} />
                        <input className='background my-account align-center margin-top---' {...register("business_phone")} placeholder="Téléphone" type="text" id="phone-number" defaultValue={props.info.business_phone} />
                    </div>
                    
                    <input className='background my-account margin-top---' {...register("business_email")} placeholder="Adresse E-mail" type="text" id="email" defaultValue={props.info.business_email} />
                    <div className='flex2 center margin-top--'>
                        <input type="submit" value="Enregistrer mes changements" />
                    </div>
                </div>
            </div>
        </form></div> : <div><p>oops</p></div>
}