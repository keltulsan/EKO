import React, { Component, useEffect, useState } from 'react';
import { Envy_ } from "../../components/envy_list/EnvyGet";
import { ReactSession } from 'react-client-session';
import { ProductList_ } from "../../components/product/productlist";
import { Link } from "react-router-dom";
import { links } from '../../App';

export function Bag(props) {
    const [liste, setListe] = useState();
    const [products, setProducts] = useState();
    const panier = [];
    const link = links();
    const idList = [];
    const quantityList = [];
    let price = 0;
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
        const liste = Envy_();
        liste
            .then(result => setListe(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));
        const products = ProductList_();
        products
            .then(result => setProducts(result))
            .catch(error => console.error("Erreur avec notre API :", error.message));

    }, [])
    return <div className='container'>
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className={"flex gap " + (dimensions.width <= 750 ? " vertical " : "space-around ")}>
            <div className={"center margin-top" + (dimensions.width <= 750 ? " align-center " : "")}>
                <div className="vertical gap">
                    { }
                    {liste && liste.filter(liste => String(liste.user_id).match(ReactSession.get("id"))).map((liste, key) => {
                        { idList.push(liste.product_id); props.setIds(idList) }
                        return products && products.filter(products => String(products.id).match(liste.product_id)).map((products, key) => {
                            if (products.id == liste.product_id) {
                                return <div className={"flex gap margin-top-- " + (dimensions.width <= 750 ? " vertical" : "space-around ")}>
                                    <div key={key} className={"box2 background-color-2-4 default-size " + (dimensions.width <= 750 ? " align-center margin-top--" : "")}>
                                        <img className="prod-img" src={products.img} alt='image de paiment paypal sur Eko' />
                                    </div>
                                    <div className="box2 background-color-2-4 flex center align-center">
                                        <p className="text">{products.name}<br></br>{products.price}€</p>
                                    </div>
                                    <div style={{ opacity: 0 }}>{quantityList.push(products.quantity)}{props.setquantityList(quantityList)}{panier.push(products.name + " ")}{price += products.price}</div>
                                </div>
                            }
                        })
                    })}
                </div>
            </div>
            <div className="margin-top background-color-2-4 radius">
                <div className="background-color-1-5 padding-top- radius-top">
                </div>
                <div className="margin-top-- flex vertical">
                    <h2 className="title left margin-top---">Récapitulatif du panier</h2>
                    <div className='flex verticle'>
                        <ul>
                        {panier.map((panier, key) =>{
                            return <li className="left center-text"><p className='text'>{panier}</p></li>
                        })}
                        </ul>
                    </div>
                    <h2 className='title left center-text'>Prix</h2>
                    <ul>
                    <li className="left center-text"><p className="text">{price}€</p></li>
                    </ul>
                    <div className='flex center'>
                        <Link className='style-link' to={link.buy}>Effectuer le paiement</Link>
                        {props.setPrice(price)}
                    </div>
                    <div className="margin-top-- margin-bottom---flex center">
                    </div>
                </div>
            </div>

        </div>
    </div>
}
