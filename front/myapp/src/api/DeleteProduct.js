export const DeleteProduct_ = async () => {
    const response = await fetch(
        'http://localhost:4444/product/delete', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ProductList = await response.json()
    return ProductList
}