import React, { Component, useEffect, useState } from 'react';

export function History() {

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
        <h1 className='title stroke'>Votre historique sur Eko</h1>
        <div className="gap-plus center">
            <div className="vertical gap">
                <div className={"margin-top flex "+(dimensions.width <= 750 ? " gap vertical" : "space-around gap-moy ")}>
                    <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center " : "")}>
                        <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                    </div>
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className={"margin-top- flex "+(dimensions.width <= 750 ? " gap vertical" : "space-around gap-moy ")}>
                    <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center " : "")}>
                        <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                    </div>
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
                <div className={"margin-top- flex "+(dimensions.width <= 750 ? " gap vertical" : "space-around gap-moy ")}>
                    <div className={"box background-color-2-4 default-size "+(dimensions.width <= 750 ? " align-center " : "")}>
                        <img className="full-width" src='./img/paypal.png' alt='image de paiment paypal sur Eko' />
                    </div>
                    <div className="box background-color-2-4 flex align-center">
                        <p className="text">What is Lorem Ipsum?
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

