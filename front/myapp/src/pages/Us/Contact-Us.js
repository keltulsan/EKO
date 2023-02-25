import emailjs from "emailjs-com"
import React, { useRef } from 'react';

export function ContactUs() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('eko', 'template_bk4anr4', form.current, 'JL73NshV9YyNy9964')
            .then((result) => {
                window.location.replace('/');
            }, (error) => {
                
                console.log(error.text);
            });
        
    };

    return <div className="flex vertical center">
        <form className="align-center" onSubmit={sendEmail} ref={form}>
            <h1 className="title stroke">Contactez-nous</h1>
            <div className="flex vertical gap center ">
                <p className="text">contacteko.pro@gmail.com</p>
                <div className="flex gap-vw">
                    <input className='background my-account-' placeholder="Prénom" type="text" id="prenom" name="first-name" />
                    <input className='background my-account-' placeholder="Nom" type="text" id="nom" name="name" />
                </div>
                <input className='background my-account' placeholder="Adresse E-mail" type="email" id="email" name="email" />
                <input className='background my-account' placeholder="Votre demande" type="text" id="ask" name="ask" />
                <textarea className='background my-account' placeholder="Votre message" type="textarea" id="message" name="message" />

                <input type="submit" value="Valider votre demande" />

            </div>
        </form >
    </div >
}