export const updateProductInfo = async (user) => {
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
    const productInfo = await response.json()
    return productInfo
}