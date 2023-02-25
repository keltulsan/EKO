export const GetNews_ = async () => {
    const response = await fetch(
        'http://localhost:4444/news/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const NewsList = await response.json()
    return NewsList
}