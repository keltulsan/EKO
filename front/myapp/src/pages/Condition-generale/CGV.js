import { useEffect, useState } from 'react'
const getAllCgv = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const cgv = await response.json()
    return cgv
}


export function CGV() {
    const [cgv, setCgv] = useState([]);
    const [res, setRes] = useState([]);


    useEffect(() => {
        const cgvFetched = getAllCgv();
        cgvFetched
            .then(result => setCgv(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        try{
            console.log(cgv)
            setRes(<>{cgv[1].desc}</>)
        }catch(err){}
    },[cgv])


    return <div className="container">
        <h1 className="title top stroke">Condition Générale de Ventes</h1>
        <p className='text stroke margin-top-- center-text'>{res}</p>
    </div>
}
