export const updateNewsInfo = async (user) => {
    const response = await fetch(
        'http://localhost:4444/news/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify(user)
        }
    )
    const newsInfo = await response.json()
    return newsInfo
}