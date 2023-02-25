import { useEffect, useState } from 'react'
const getAllCgu = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const cgu = await response.json()
    return cgu
}


export function CGU() {
    const [cgu, setCgu] = useState([]);
    const [res, setRes] = useState([]);


    useEffect(() => {
        const cguFetched = getAllCgu();
        cguFetched
            .then(result => setCgu(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        try{
            console.log(cgu)
            setRes(<>{cgu[0].desc}</>)
        }catch(err){}
    },[cgu])


    return <div className="container">
        <h1 className="title top stroke">Condition Générale d'Utilisation</h1>
        <p className='text stroke margin-top-- center-text'>{res}</p>
    </div>
}
