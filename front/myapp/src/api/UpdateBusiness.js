export const updateBusinessInfo = async (user) => {
    const response = await fetch(
        'http://localhost:4444/business/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const userInfo = await response.json()
    return userInfo
}