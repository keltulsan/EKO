export const ProductList = async () => {
    const response = await fetch(
        'http://localhost:4444/product/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ProductList = await response.json()
    return ProductList
}

export const ProductUpdate = async (user) => {
    const response = await fetch(
        'http://localhost:4444/product/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const ProductUpdate = await response.json()
    return ProductUpdate
}