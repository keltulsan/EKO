export const GetProduct_ = async () => {
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