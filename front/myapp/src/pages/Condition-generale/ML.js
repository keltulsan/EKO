import { useEffect, useState } from 'react'
const getAllMl = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/list', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
    )
    const ml = await response.json()
    return ml
}


export function ML() {
    const [ml, setMl] = useState([]);
    const [res, setRes] = useState([]);


    useEffect(() => {
        const mlFetched = getAllMl();
        mlFetched
            .then(result => setMl(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);

    useEffect(() => {
        try{
            console.log(ml)
            setRes(<>{ml[3].desc}</>)
        }catch(err){}
    },[ml])


    return <div className="container">
        <h1 className="title top stroke">Mention Legale</h1>
        <p className='text stroke center-text margin-top--'>{res}</p>
    </div>
}
