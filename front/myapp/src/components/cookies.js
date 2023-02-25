import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { links } from "../App";
import { ReactSession } from 'react-client-session';

export function Cookies() {
    const link = links()
    const [cookies, setCookies] = useState(false)
    const [cookie, setCookie] = useState("null")

    useEffect(() => {
        if (cookie != "null") {
            ReactSession.set("cookies", cookie);
            setCookies(false)
            return
        }

        try {
            ReactSession.get("cookies")
            if (ReactSession.get("cookies") == undefined) {
                setCookies(true)
            } else {
                setCookie(ReactSession.get("cookies"));
                setCookies(false)
            }
        } catch (err) {
            setCookies(true)
        }

    }, [cookies])

    return <>
        {cookies ?
            <div className="cookies flex vertical gap radius">
                <div className="flex gap space-around">
                    <img className="" src="./img/cookies.png" alt="Cookies d'Eko" />
                    <p className="text align-center">Ce site web utilise des cookies. Les cookies nous permettent de personnaliser le contenu et les annonces, d'offrir des fonctionnalités relatives aux médias sociaux et d'analyser notre trafic. Nous partageons également des informations sur l'utilisation de notre site avec nos partenaires de médias sociaux, de publicité et  d'analyse, qui peuvent combiner celles-ci avec d'autres informations que vous leur avez fournies ou qu'ils ont collectées lors de votre utilisation de  leurs services.</p>
                </div>
                <div className="flex gap space-evenly">
                    <button className="button refuse-color" onClick={() => {
                        setCookies(!cookies);
                        setCookie(false);
                    }}><p className="text align-center">Refuser</p></button>
                    <button className="button accept-color" onClick={() => {
                        setCookies(!cookies);
                        setCookie(true);
                    }}><p className="text align-center">Accepter</p></button>
                </div>
            </div>
            :
            <div></div>
        }
    </>
}