import React from "react"
import { Link } from "react-router-dom"
import { links } from "../App";

export function Footer() {
    const link = links();

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

    return <div className="footer">
        <div className={"flex space-between" + (dimensions.width <= 750 ? " vertical" : "")}>
            <Link to={link.homeFull}><img className="logo" src="./img/logo.png" alt="Logo de Eko" /></Link>
            <div >
                <div className={"flex " + (dimensions.width <= 750 ? "left-f" : "right-f")}>
                    <Link className="style-link-2" to={link.faq}>FAQ </Link><p className="text"> / </p><Link className="style-link-2" to={link.contact}> Contact</Link>
                </div>
                <p className="little flex"><Link to={link.ml}>Mention Legale</Link></p>
                <p className="little flex"><Link to={link.aboutUs}>About us</Link></p>
            </div>
        </div>
        <div className={"flex space-between" + (dimensions.width <= 750 ? " vertical" : "")}>
            <div>
                <p className="little flex"><Link to={link.cgu}>Conditions générales d'utilisation</Link></p>
                <p className="little flex"><Link to={link.cgv}>Conditions générales de ventes</Link></p>
                <p className="little flex"><Link to={link.cgr}>Conditions générales de rétractation</Link></p>
            </div>
            <div className={"flex" + (dimensions.width <= 750 ? "" : " align-bot")}>
                <img src="./img/mastercard.png" alt="Logo de mastercard" />
                <img src="./img/visa.png" alt="Logo de visa" />
                <img src="./img/paypal.png" alt="Logo de paypal" />
            </div>
        </div>
    </div>
}