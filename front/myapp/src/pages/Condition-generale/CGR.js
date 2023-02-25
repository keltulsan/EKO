import { useEffect, useState } from 'react'
const getAllCgr = async () => {
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


export function CGR() {
    const [cgr, setCgr] = useState([]);
    const [res, setRes] = useState([]);


    useEffect(() => {
        const cgrFetched = getAllCgr();
        cgrFetched
            .then(result => setCgr(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        try{
            console.log(cgr)
            setRes(<>{cgr[2].desc}</>)
        }catch(err){}
    },[cgr])


    return <div className="container">
        <h1 className="title top stroke">Condition Générale Rétractation</h1>
        <p className='text stroke center-text margin-top--'>{res}</p>
    </div>
}
