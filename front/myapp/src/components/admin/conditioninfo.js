import { useForm } from "react-hook-form";
import { GetCondition_ } from "../../api/GetCondition";
import React, { Component, useEffect, useState } from 'react';

export function ConditionListInfo(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmitUpdateCondition = async (data) => {
        GetCondition_(data)
        window.location.replace('/');
    }
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    return <form onSubmit={handleSubmit(onSubmitUpdateCondition)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Condition</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
            </div>
            <h2 className='title top left align-center'>Information</h2>
            <div className="flex2 margin-top--- align-center">
                <input type="hidden" {...register("id")} value={props.info.id} />
                <input className='background my-account- margin-top--- ' {...register("name")} placeholder="Nom-Prénom" type="text" id="Nom-prenom" defaultValue={props.info.name} />
            </div>
            <div className="flex2 margin-top--- vertical align-center">
            <input className='background my-account- margin-top---' {...register("link_name")} placeholder="Lien de la condition" type="hidden" id="Link-name" defaultValue={props.info.name.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")} />
                <textarea className='background my-account' {...register("desc")} placeholder="Description" type="textarea" id="message" name="message" defaultValue={props.info.desc} />
            </div>
            <div className="flex2 center margin-top--">
                <input type="submit" value="Modifier la condition" />
            </div>
        </div>
    </form>
} 