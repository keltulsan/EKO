import { ProductUpdate_ } from "../product/productUpdate";
import { useForm } from "react-hook-form";
import { Envy_ } from "../../components/envy_list/EnvyDel";
import { ReactSession } from 'react-client-session';
import React from "react";

export function Buy(props){
    const { register, handleSubmit, formState: { errors } } = useForm();
    let c = -1;
    const onSubmitUpdateProduct = async (data) => {
        props.ids.map((ids,key)=>{
        c+=1
        ProductUpdate_({"id":String(data["id"+String(c)]),"quantity":String(([props.quantityList[c]]-1))})
        Envy_({"user_id":ReactSession.get("id"),"product_id":String(data["id"+String(c)])})}
        )
        if(data["card-number"].length!=16){
            props.setAlerts(10);
            props.setColors(1);
            props.setShow(true)
        }else if(data["cryptogram"].length!=3){
            props.setAlerts(12);
            props.setColors(1);
            props.setShow(true)
        }else if(data["expire_m"]=="" || data["expire_y"]==""){
            props.setAlerts(14);
            props.setColors(1);
            props.setShow(true)
        }else if(data["save"]==true){
            ReactSession.set("card-number",data["card-number"])
            ReactSession.set("expire_m",data["expire_m"])
            ReactSession.set("expire_y",data["expire_y"])
            ReactSession.set("cryptogram",data["cryptogram"])
            props.setAlerts(14)
            props.setColors(0)
            props.setShow(true)
            alert("numéro de carte"+data["card-number"]+"\nmois:"+data["expire_m"]+"\nannée:"+data["expire_y"]+"\ncryptogram:"+data["cryptogram"])
        }else if(data["save"]!=true){
            ReactSession.set("card-number",data["card-number"])
            ReactSession.set("expire_m",data["expire_m"])
            ReactSession.set("expire_y",data["expire_y"])
            ReactSession.set("cryptogram",data["cryptogram"])
            props.setAlerts(13);
            props.setColors(0);
            props.setShow(true)
            alert("numéro de carte"+data["card-number"]+"\nmois:"+data["expire_m"]+"\nannée:"+data["expire_y"]+"\ncryptogram:"+data["cryptogram"])}
        // window.location.replace('/');
    }

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
return <form onSubmit={handleSubmit(onSubmitUpdateProduct)} className="align-center flex vertical center" >
        <h1 className="title flex2 center margin-top--">Confirmation d'achat</h1>
        <div className="flex2 vertical center">
            <div className="profils-account flex vertical center">
                <div className="flex2 center">
                <img className={"img-modal "+(dimensions.width <= 750 ? " img-modal- " : "")} src='./img/avatar.png' alt='ton avatar sur Eko' />
            </div>
            </div>
            <h2 className='title top left align-center'>Vous êtes sur le point de payer {props.price}€.</h2>
            <div className="flex vertical gap center">
                <h2 className='title top left align-center'>Informations bancaire</h2>
                <div className="flex gap-vw align-center">
                    <input className='background my-account-' {...register("card-number")} placeholder="Numéro de carte" type="text" id="Nom-prenom" defaultValue={ReactSession.get("card-number")} />
                    <select {...register("expire_m")} name='expireMM' id='expireMM' defaultValue={ReactSession.get("expire_m")}>
                        <option value=''>Mois</option>
                        <option value='01'>Janvier</option>
                        <option value='02'>Février</option>
                        <option value='03'>Mars</option>
                        <option value='04'>Avril</option>
                        <option value='05'>Mai</option>
                        <option value='06'>Juin</option>
                        <option value='07'>Juillet</option>
                        <option value='08'>Août</option>
                        <option value='09'>Septembre</option>
                        <option value='10'>Octobre</option>
                        <option value='11'>Novembre</option>
                        <option value='12'>Décembre</option>
                    </select>
                    <select {...register("expire_y")} name='expireYY' id='expireYY' defaultValue={ReactSession.get("expire_y")}>
                        <option value=''>Année</option>
                        <option value='20'>2020</option>
                        <option value='21'>2021</option>
                        <option value='22'>2022</option>
                        <option value='23'>2023</option>
                        <option value='24'>2024</option>
                        <option value='25'>2025</option>
                        <option value='26'>2026</option>
                        <option value='27'>2027</option>
                        <option value='28'>2028</option>
                        <option value='29'>2029</option>
                    </select> 
                </div>
                <div className="flex gap-vw align-center">
                    <input className='background my-account' {...register("cryptogram")} placeholder="cryptogram" type="text" id="email" defaultValue={ReactSession.get("cryptogram")} />
                </div>
                <div className='align-top flex center all gap-'>
                <input {...register("save")} type="checkbox" className="align-center" defaultChecked={true} />
                <p className="text align-center stroke">Sauvegarder la carte bancaire</p>
            </div>
            </div>
            {props.ids.map((ids,key)=>{
                return <div key={key}><input type="hidden" {...register("id"+String(key))} value={ids}/>
                </div>
            })}
            <input type="submit" value="Payer" />
            </div>
        </form>
}
