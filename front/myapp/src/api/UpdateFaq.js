export const updateFaqInfo = async (user) => {
    const response = await fetch(
        'http://localhost:4444/faq/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const faqInfo = await response.json()
    return faqInfo
}