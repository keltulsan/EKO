import { Link } from "react-router-dom"
import React, { Component, useEffect, useState } from 'react';
import { links } from "../../App";
import { Product_} from "../../components/product/Get_product";
import { ProductQuantitytAdmin } from "../../components/admin/productQuantityInfo"
export function Stocks(props) {
    const link = links();
    const [produit, setProduit] = useState([])
    const [produitMap, setProduitMap] = useState(false)
    const InputComponent = () => {
        const inputElement = React.useRef()
    
        return <input ref={inputElement} />
    }
    useEffect(() => {
        const Products = Product_();
        Products
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
        })}
    
        window.addEventListener('resize', handleResize)
    })
    useEffect(() =>{
        setProduitMap(produit.map((produits, key) => {
            return <div key={key} className="flex vertical gap- align-center">
                <div className="flex center gap box2 background-color-2-4">
                    <img className="align-center prod-img" src={produits.img} alt={'image de' + (produits.name) + 'sur Eko'} />
                </div>
                <div className="flex center margin-top ">
                    <Link className="style-link stroke" to={link.stocks} onClick={()=>{props.handleShowModalProductQuantity()}}>Modifier </Link>
                    <ProductQuantitytAdmin info={produits}/>
                </div>
            </div>
        }))
    },[produit])

    return <div className='container'>
    <h1 className='title stroke'> Mes ventes sur Eko</h1>
    <div className={"" + (dimensions.width <= 750 ? " flex center vertical margin-top- gap" : " grid2 gap-plus margin-top")}>
        {produitMap}
    </div>
    <div className="flex center margin-top">
        <Link className="style-link-2" to={link.sells}><h2 className="title border stroke background-button">Mes Ventes</h2></Link>
    </div>
    <div className="flex center margin-top">
        <Link className="style-link-2" to={link.homeFull}><img className="align-center icon-plus" src='./img/bouton play.png' alt='Bouton lancement de vidéo explicative sur les ventes sur Eko' /></Link>
    </div>
</div>}