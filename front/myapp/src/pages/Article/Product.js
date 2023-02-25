import { Link } from "react-router-dom"
import { links } from "../../App";
import { Product_ } from "../../components/product/Get_product";
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Product() {
    const link = links();
    const [product, setProduct] = useState([]);
    const [res, setRes] = useState([]);
    let { label } = useParams();
    useEffect(() => {
        const productFetched = Product_();
        productFetched
            .then(result => setProduct(result))
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
    return product ? <div className='container'>
        {product.filter(product => product.label_name.match(label)).map((product, key) => {
            return <div><Link to={"/page/" + product["name"].toLowerCase().replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "")}><h1 className='title stroke' > {product.label_name} sur Eko</h1>{console.log(product)}
                <div className={"flex center " + (dimensions.width <= 750 ? " vertical margin-top- gap" : " gap-plus margin-top")}>
                    <div className="flex vertical gap-">
                        <div className="flex gap box2 background-color-2-4 center">
                            <img className={"" + (dimensions.width <= 750 ? "size-img- flex vertical center " : 'size-img align-center grid')} src={product.img} alt={'image de' + (product.name) + 'sur Eko'} />

                        </div>
                    </div>
                </div>
            </Link>
            </div>
        })}
    </div>
     :<></>   
}