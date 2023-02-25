import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UpdateBusiness_ } from "../../components/update_acc/UpdateBusiness";
import { ReactSession } from 'react-client-session';
import { Login_Business_ } from "../../components/login_signup/LogiNBusiness";

export function EnterprisePage(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const test = async ()=>{
        const businessList = await Login_Business_();
        setInfo(await businessList.filter(business=>business.user_id===ReactSession.get("id")));
    }
    const [info,setInfo] = useState();
    const onSubmitUpdateUser = async (data) => {
        UpdateBusiness_(data)
        window.location.replace('/');}
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
    useEffect(() => {
        test()
    }, []);
    return info?<div className="flex vertical"> {}
        <form onSubmit={handleSubmit(onSubmitUpdateUser)} className="align-center flex vertical center" >
            <h1 className="title">Mon Entreprise</h1>
            <div className="flex vertical gap center">
                <div className="profils-account flex vertical center">
                    <img className={"align-center"+(dimensions.width <= 750 ? " min-account-img " : " account-img")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
                <h2 className='title top left align-center'>Information</h2>
                <div className="flex gap-vw align-center">
                    <input type="hidden" {...register("id")} value={ReactSession.get("id")}/>
                    <input className='background my-account-' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={info[0]["name"]} />
                    <input className='background my-account-' {...register("activity")} placeholder="Nom d'utilisateur" type="text" id="nickname" defaultValue={info?info[0]["activity"]:""} />
                </div>
                <div className="flex gap-vw align-center">
                    <input className='background my-account' {...register("business_email")} placeholder="Adresse E-mail" type="text" id="email" defaultValue={info[0]["business_email"]} />
                </div>
                <input className='background my-account align-center' {...register("business_name")} placeholder="Entreprise" type="text" id="business" />
                <input className='background my-account align-center' {...register("business_adress")} placeholder="Adresse" type="text" id="adress" defaultValue={info[0]["business_adress"]} />
                <input className='background my-account align-center' {...register("business_phone")} placeholder="Téléphone" type="text" id="phone-number" defaultValue={info[0]["business_phone"]} />

                <div>
                    <input type="submit" value="Enregistrer mes changements" onClick={()=>{props.setColors(0);props.setShow(true);props.setAlerts(9)}}/>
                </div>
            </div>
        </form></div>:<div><p>oops</p></div>
}