

export function searchByCatId(department,category){
    
    const url = `/api/catalog_system/pub/products/search/${department}/${category}?sc=1`

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