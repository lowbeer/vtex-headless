

export function productBySlug(slug){
    
    const url = `/api/catalog_system/pub/products/search/${slug}/p`

    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json()
        })
    .then((data) => {
        return data[0]
        });

}