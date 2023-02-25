export const SignupBusiness = async (user) => {
    const response = await fetch(
        'http://localhost:4444/user/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const sign_Up = await response.json()
    return sign_Up
}
