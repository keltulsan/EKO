export const envyListAddProduct = async (user) => {
    const response = await fetch(
        'http://localhost:4444/envy_list/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const envyListAdd = await response.json()
    return envyListAdd
}


export const envyListGet = async () => {
    const response = await fetch(
        'http://localhost:4444/envy_list/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const envyList = await response.json()
    return envyList
}


export const envyListDelProduct = async (user) => {
    const response = await fetch(
        'http://localhost:4444/envy_list/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const envyListAdd = await response.json()
    return envyListAdd
}