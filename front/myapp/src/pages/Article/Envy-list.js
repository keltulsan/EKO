import React, { Component, useEffect, useState } from 'react';

export function EnvyList() {

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

    return <div className='container'>
        <h1 className='title stroke'> Liste d'envies</h1>
        <div className="flex gap-plus center padding-top-">
            <div className="flex vertical">
                <div className={"flex gap box background-color-2-4 "+(dimensions.width <= 750 ? " align-center " : "space-around ")}>
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
            <div className="flex vertical">
                <div className={"flex gap box background-color-2-4 "+(dimensions.width <= 750 ? " align-center " : "space-around ")}>
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
            <div className="flex vertical">
                <div className={"flex gap box background-color-2-4 "+(dimensions.width <= 750 ? " align-center" : "space-around ")}>
                    <img className="align-center" src='./img/mastercard.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/visa.png' alt='image de paiment mastercard sur Eko' />
                    <img className="align-center" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                </div>
            </div>
        </div>
    </div>
}

