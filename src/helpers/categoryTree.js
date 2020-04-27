

export function categoryTree(){
    
    let categoryLevelsNumber = 3
    const url = `api/catalog_system/pub/category/tree/${categoryLevelsNumber}/?sc=1`

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json()
        })
    .then((data) => {
        return data
        });

}