import React, { Component, useEffect, useState } from 'react';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom'
import { links } from '../App';


export default function Chatbox() {
    const link = links()

    const [isClick, setIsClick] = useState(0);
    const [option, setOption] = useState(0);

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


    return <div className="container">
        <div className="flex center">
            <h1><img className="logo half stroke" src='./img/logo.png' alt="Logo de Eko" /></h1>
        </div>
        <div className="flex center margin-top">
            <img className={"rotate-img z-index- chat-size " + (dimensions.width <= 750 ? "min-chat-box" : "")} src='./img/chat-box.png' alt="Logo de Eko" />
        </div>

        <div className="gap margin-top flex">
            <div onClick={() => isClick == 1 ? "" : setIsClick(1)} className="box background-color-2-4 flex align-center vertical">
                <h2 className='title'>Comment devenir vendeur ?</h2>
                <Collapse isOpened={isClick == 1}>
                    <div><p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>
                        Pour ce faire il vous sera nécessaire de nous envoyez un mail dans la page ci-jointe en y inscrivant dans la zone demande : Devenir un vendeur.
                    </p>
                        <div className='flex right-f'>
                            <Link className="style-link" to={link.contact}><p>Mail</p></Link>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
        <div className="gap margin-top flex">
            <div onClick={() => isClick == 2 ? "" : setIsClick(2)} className="box background-color-2-4 flex align-center vertical">
                <h2 className='title'>En quoi notre site est il écologique ?</h2>
                <Collapse isOpened={isClick == 2}>
                    <div><p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>
                        Notre site est écologique car nous avons pour objectif que notre site se répande à l'internationale. Et grâce à notre méthode de vente innovante qui ne vous proposes que les offres les plus proches de chez vous. Ce qui permettra de réduire les trajets réguliers pour faire tous vos achat.
                    </p>
                    </div>
                </Collapse>
            </div>
        </div>
        <div className="gap margin-top flex">
            <div onClick={() => isClick == 3 ? "" : setIsClick(3)} className="box background-color-2-4 flex align-center vertical">
                <h2 className='title'>En cas de problème sur le site ?</h2>
                <Collapse isOpened={isClick == 3}>
                    <div><p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>
                        Avez vous essayez de le redemarrer ?
                    </p>
                        <div className='flex center space-evenly'>
                            <Link onClick={() => option == 1 ? "" : setOption(1)} className="style-link">Oui </Link><p className="text"> / </p><Link onClick={() => option == 2 ? "" : setOption(2)} className="style-link" > Non </Link>
                        </div>
                        {option == 1 || option == 2 ?
                            option == 1 ?
                                <Collapse isOpened={isClick == 3}>
                                    <div><p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>
                                        Dommage réessayez encore, cela peut peut être fonctionner. Si vous voulez de plus amples informations n'hésitez pas à nous contacter par mail.
                                    </p>
                                        <div className='flex right-f'>
                                            <Link className="style-link" to={link.contact}><p>Mail</p></Link>
                                        </div>
                                    </div>
                                </Collapse>
                                : 
                            
                            option == 2 ?
                                <Collapse isOpened={isClick == 3}>
                                    <div><p className={"text " + (dimensions.width <= 750 ? " padding-top-" : "")}>
                                        Dans ce cas n'hésitez pas à le faire pour pouvoir faire vos recherches sur Eko
                                    </p>
                                    </div>
                                </Collapse>
                            : "" : ""
                        }
                    </div>
                </Collapse>
            </div>
        </div>
    </div>
}
