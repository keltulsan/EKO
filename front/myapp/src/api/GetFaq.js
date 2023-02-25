export const GetFaq_ = async () => {
    const response = await fetch(
        'http://localhost:4444/faq/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const FaqList = await response.json()
    return FaqList
}