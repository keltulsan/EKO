import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom';
import { Product_ } from "../../components/product/Get_product";
import { Envy_ } from "../../components/envy_list/EnvyAdd";
import { ReactSession } from 'react-client-session';
import { useForm } from "react-hook-form";

function SliderArticles(props) {
    return (
        <Carousel>
            <div className='left'>
                <img className="icon-carousel" src={props.img} alt="Image d'article sur Eko" />
            </div>
            <div>
                <img className="icon-carousel" src={props.img} alt="Image d'article sur Eko" />
            </div>
            <div>
                <img className="icon-carousel" src={props.img} alt="Image d'article sur Eko" />
            </div>
            <div>
                <img className="icon-carousel" src={props.img} alt="Image d'article sur Eko" />
            </div>
            <div>
                <img className="icon-carousel" src={props.img} alt="Image d'article sur Eko" />
            </div>
        </Carousel>
    );
};



export function ArticleSell() {
    const [star, setStar] = useState(0);
    const [stars, setStars] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let { product_name } = useParams();
    const AddToCart = async (data) => {
        console.log(data)
        Envy_(data)
    }
    const [info, setInfo] = useState();
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
    })
    useEffect(() => {
        const productpage = Product_();
        productpage
            .then(result => setInfo(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
    }, []);
    useEffect(() => {
        setStars(() => {
            return <div className="left margin-top--- ">
                <img className="icon" src={star < 1 ? "/img/etoile.png" : "/img/etoile_fill.png"} alt="icone d'étoile sur Eko" onClick={() => {
                    setStar(1);
                }}></img>
                <img className="icon" src={star < 2 ? "/img/etoile.png" : "/img/etoile_fill.png"} alt="icone d'étoile sur Eko" onClick={() => {
                    setStar(2);
                }}></img>
                <img className="icon" src={star < 3 ? "/img/etoile.png" : "/img/etoile_fill.png"} alt="icone d'étoile sur Eko" onClick={() => {
                    setStar(3);
                }}></img>
                <img className="icon" src={star < 4 ? "/img/etoile.png" : "/img/etoile_fill.png"} alt="icone d'étoile sur Eko" onClick={() => {
                    setStar(4);
                }}></img>
                <img className="icon" src={star < 5 ? "/img/etoile.png" : "/img/etoile_fill.png"} alt="icone d'étoile sur Eko" onClick={() => {
                    setStar(5);
                }}></img>
            </div>
        })
    }, [star])

    return info && <div className='container'>
        {info.filter(info => info.name.toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").match(product_name)).map((info, key) => {
            return <div key={key}>
                <h1 className='title stroke'>{info.name}</h1>
                <div className={"flex " + (dimensions.width <= 750 ? " vertical " : "space-around ")}>
                    <div className={"gap-plus center " + (dimensions.width <= 750 ? " align-center " : "")}>
                        <div className="flex vertical gap margin-top">

                            <SliderArticles img={info.img}/>


                        </div>
                        
                    </div>
                    <div className='align-top flex gap-'>
                                    <div>{info.quantity && 
                                    <div>
                                        <input type="checkbox" className="align-center" defaultChecked={true} disabled />
                                        <p className="text align-center stroke">En stock,{info.quantity} restants</p></div>}
                                        {info.quantity==0 &&
                                        <div>
                                        <input type="checkbox" className="align-center" defaultChecked={true} disabled />
                                        <p className="text align-center stroke">Victime de son succès,{info.quantity} restant</p>
                                        </div>}
                                    </div>
                            </div>

                    <div className={"background-color-2-4 radius " + (dimensions.width <= 750 ? " align-center margin-top-- min-commande " : " margin-top commande ")}>
                        <div className="background-color-1-5 padding-top- radius-top">
                        </div>
                        <div className="margin-top-- flex vertical">
                            <h2 className="title left">Prix {info.price} <img className="icon" src="/img/euro.png" alt="icone euro sur Eko"></img></h2>
                            <h2 className="title left margin-top--- ">Date de livraison: <br></br> Dans pas trop longtemps promis<img className="icon" src="/img/calendrier.png" alt="icone de calendrier sur Eko"></img></h2>
                            <h2 className="title left margin-top--- ">Expéditeur: <br></br> Lettrissimo<img className="icon" src="/img/groupe.png" alt="icone de groupe sur Eko"></img></h2>
                            <div className="flex vertical margin-top--- ">
                                <h2 className="title left">Note de l'article </h2>
                                {stars}
                                <div className="margin-top--">
                                    <h2 className="title left">Quantité</h2>
                                    <select className="left background-color-2-3 drop-down radius">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                </div>
                            </div>
                            <div className="margin-top-- flex center margin-bottom---">
                                <div className="flex center">
                                    <form onSubmit={handleSubmit(AddToCart)}>
                                    <input type="hidden" {...register("user_id")} defaultValue={ReactSession.get("id")}/>
                                    <input type="hidden" {...register("product_id")} defaultValue={info.id}/>
                                    <input className="padding-right-left" type="submit" value="Ajouter au panier"></input>
                                    </form>
                                    {/* <img className="icon" src="/img/ajout-panier.png" alt="icone d'ajouter au panier sur Eko"></img> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        })}
    </div>
}

