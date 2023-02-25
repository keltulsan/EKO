import { Link } from 'react-router-dom';
import { links } from '../../App';

export default function Error404(){
    const link = links();

    return <>
        <h1 className='title top stroke'>error 404</h1>
        <h2 className='title top stroke'>La page sélectionnée est introuvable</h2>
        <div className="err-qcq flex center">
            <Link to={link.homeFull} className="align-center">Menu</Link>
        </div>
    </>
}