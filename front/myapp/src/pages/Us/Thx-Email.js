import { Link } from 'react-router-dom'
import { links } from '../../App';

export function ThxEmail(props) {
    const link = links()

    return <div className="flex vertical gap-plus">
        <h1 className="title top stroke">Merci</h1>
        <div className="flex center">
            <p className='text align-center stroke'>Nous vous recontacterons par mail dans les plus bref delais.</p>
        </div>
        <div className='text align-center'>
            <Link to={link.home}><input type="submit" value="Retourner au menu" /></Link>
        </div>
    </div>

}
