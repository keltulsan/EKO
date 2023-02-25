import { Link } from "react-router-dom"
import React, { Component, useEffect, useState } from 'react';
import { links } from "../../App";
import { DeleteProduct_ } from "../../api/DeleteProduct"
import { Product_} from "../../components/product/Get_product";

export function Sells(props) {
    const link = links();
    const [produit, setProduit] = useState([])
    const [produitMap, setProduitMap] = useState(false)
    const onSubmitDeleteProduct = async (data) => {
        DeleteProduct_(data)
        window.location.replace('/sells');
    }

    useEffect(() => {
        const labelsFetched = Product_();
        labelsFetched
            .then(result => setProduit(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

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
        console.log(produit)
        setProduitMap(produit.map((produits, key) => {
            return <div className="flex vertical gap- align-center">
                <div className="flex center gap box2 background-color-2-4">
                    <img className="align-center prod-img" src={produits.img} alt={'image de' + (produits.name) + 'sur Eko'} />
                </div>
                <div className="flex center gap-">
                    <Link className="style-link stroke" to={link.sells} onClick={() => { props.handleShowModalProduct(); InputComponent.click() }}>Modifier </Link><p className="text"> / </p><Link className="style-link stroke" to={link.sells} onClick={() => { onSubmitDeleteProduct(); }}> Supprimer</Link>
                </div>
            </div>
        }))
    })

    const InputComponent = () => {
        const inputElement = React.useRef()

        return <input ref={inputElement} />
    }

    return <div className='container'>
        <h1 className='title stroke'> Mes ventes sur Eko</h1>
        <div className={"" + (dimensions.width <= 750 ? " flex center vertical margin-top- gap" : " grid2 gap-plus margin-top")}>
            {produitMap}
        </div>
        <div className="flex center margin-top ">
            <input className="padding-right-left" type="submit" value="Ajouter un produit" onClick={() => { props.handleShowModalProductInsert() }} ></input>
        </div>
        <div className="flex center margin-top">
            <Link className="style-link-2" to={link.stocks}><h2 className="title border stroke background-button">Mes stocks</h2></Link>
        </div>
        <div className="flex center margin-top">
            <Link className="style-link-2" to={link.homeFull}><img className="align-center icon-plus" src='./img/bouton play.png' alt='Bouton lancement de vidéo explicative sur les ventes sur Eko' /></Link>
        </div>
    </div>
}
