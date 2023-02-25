import React, { Component, useEffect, useState } from 'react';

export function Articles() {
    
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
        <h1 className='title stroke'>Mes articles sur Eko</h1>
        <div className={"flex "+(dimensions.width <= 750 ? " vertical " : "space-around ")}>
            <div className={"gap-plus center "+(dimensions.width <= 750 ? " align-center " : "")}>
                <div className="flex vertical gap margin-top">

                    <h2 className='title left stroke'>Votre carte bancaire</h2>
                    <input className='background my-account' placeholder="Numéro de carte" type="text" id="card-numbers" />
                    <div className="flex gap-vw">
                        <input className='background my-account-' placeholder="Date d'éxpiration " type="text" id="expiration-date" />
                        <input className='background my-account-' placeholder="Cryptogramme" type="text" id="cryptogram" />
                    </div>
                    <input className='background my-account' placeholder="Titulaire" type="text" id="incumbent" />

                    <div className='align-top flex gap-'>
                        <input type="checkbox" className="align-center" defaultChecked={true} />
                        <p className="text align-center stroke">Sauvegarder mes coordonnées pour la prochaine fois</p>
                    </div>


                </div>
            </div>
            <div className={"background-color-2-4 radius "+(dimensions.width <= 750 ? " align-center margin-top-- min-commande " : " margin-top commande ")}>
                <div className="background-color-1-5 padding-top- radius-top">
                </div>
                <div className="margin-top- flex vertical">
                    <h2 className="title left">Prix global</h2>
                    <h2 className="title left margin-top--- ">TVA</h2>
                    <h2 className="title left margin-top--- ">Code promotionel</h2>
                    <div className="background-color-2-3 flex center margin-top-">
                        <h2 className="title">KIWI 69oooo</h2>
                    </div>
                    <h2 className="title margin-top-- left">Récapitulatif du panier</h2>
                    <h2 className="title margin-top--">'nom produit+quantité'</h2>
                    <div className="margin-top--- margin-bottom--- flex center">
                        <input className="padding-right-left" type="submit" value="Valider mon panier" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}

