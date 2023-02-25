import React, { Component, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { Update_ } from "../../components/update_acc/Update";
import { ReactSession } from 'react-client-session';
import { Login_ } from "../../components/login_signup/LogiN";

export function UserPage(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const test = async () => {
        const userList = await Login_();
        setInfo(await userList.filter(user => user.id === ReactSession.get("id")));
    }
    const [info, setInfo] = useState();
    const [time, setTime] = useState(false);
    const onSubmitUpdateUser = async (data) => {
        Update_(data)
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
    useEffect(() => {
        test()
        if (time) {
            const timer = setTimeout(() => {
                window.location.replace('/')
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [time]);
    return info ? <div className="flex vertical"> { }
        <form onSubmit={handleSubmit(onSubmitUpdateUser)} className="align-center flex vertical center" >
            <h1 className="title">Mon Compte</h1>
            <div className="flex vertical gap center">
                <div className="profils-account flex vertical center">
                    <img className={"align-center" + (dimensions.width <= 750 ? " min-account-img " : " account-img")} src='./img/avatar.png' alt='ton avatar sur Eko' />
                </div>
                <h2 className='title top left align-center'>Information</h2>
                <div className="flex gap-vw align-center">
                    <input type="hidden" {...register("id")} value={ReactSession.get("id")} />
                    <input className='background my-account-' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={info[0]["name"]} />
                    <input className='background my-account-' {...register("nickname")} placeholder="Nom d'utilisateur" type="text" id="nickname" defaultValue={info ? info[0]["nickname"] : ""} />
                </div>
                <div className="flex gap-vw align-center">
                    <input className='background my-account' {...register("mail")} placeholder="Adresse E-mail" type="text" id="email" defaultValue={info[0]["mail"]} />
                </div>
                <input className='background my-account align-center' {...register("country")} placeholder="Pays" type="text" id="country" defaultValue={info[0]["country"]} />
                <input className='background my-account align-center' {...register("business_name")} placeholder="Entreprise" type="text" id="business" />
                <input className='background my-account align-center' {...register("adress")} placeholder="Adresse" type="text" id="adress" defaultValue={info[0]["adress"]} />
                <input className='background my-account align-center' {...register("apartement")} placeholder="Appartement (falcultatif)" type="text" id="apartment" defaultValue={info[0]["apartement"]} />
                <div className="flex gap-vw align-center">
                    <input className='background my-account-' {...register("code_postal")} placeholder="Code postal" type="text" id="code-postal" defaultValue={info[0]["code_postal"]} />
                    <input className='background my-account-' {...register("city")} placeholder="Ville" type="text" id="city" defaultValue={info[0]["city"]} />
                </div>
                <input className='background my-account align-center' {...register("phone_number")} placeholder="Téléphone" type="text" id="phone-number" defaultValue={info[0]["phone_number"]} />

                <div>
                    <input type="submit" value="Enregistrer mes changements" onClick={() => { props.setColors(0); props.setShow(true); props.setAlerts(9); setTime(true) }} />
                </div>
            </div>
        </form></div> : <div><p>oops</p></div>
}