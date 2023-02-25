export const updateConditionInfo = async (user) => {
    const response = await fetch(
        'http://localhost:4444/condition/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const conditionInfo = await response.json()
    return conditionInfo
}