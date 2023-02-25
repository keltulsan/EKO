import Toast from 'react-bootstrap/Toast';
export function Toast_(props){
    const all_things=["Déconnexion effectuée avec succès","Merci d'accepter les CGU","Adresse email/mot de passe incorrect","Mail ne peut pas être vide","Nom d'utilisateur ne peut pas être vide","Les mots de passe ne correspondent pas","Cette adresse email est déjà assignée à un compte","Merci de bien vouloir mettre un caractère spécial,un chiffre,une minuscule et une majuscule dans votre mot de passe","Connexion effectuée","Informations modifiées avec succès","Merci de rentrer un numéro de carte valide","Merci de rentrer les champs Mois et Année","Merci de rentrer un cryptogramme valide","Paiement effectué avec succès","Carte sauvegardé et paiement effectué avec succès"]
    const colors=['success','danger']
return <Toast onClose={() => props.setShow(false)} show={props.show} delay={8000} autohide className='fixed' bg={colors[props.colors]}>
        <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto"><p className='text'>Alerte</p></strong>
                </Toast.Header>
                <Toast.Body><p className='text'>{all_things[props.alerts]}</p></Toast.Body>
    </Toast>
}