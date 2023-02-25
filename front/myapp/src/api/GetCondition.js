export const GetCondition_ = async () => {
    const response = await fetch(
        'http://localhost:4444/condition/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const ConditionList = await response.json()
    return ConditionList
}