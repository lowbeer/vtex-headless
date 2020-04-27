

export function searchByCatId(department,category1,category2){
    let url = null
    if (category1 && category2){
         url = `/api/catalog_system/pub/products/search/${department}/${category1}/${category2}?sc=1`
    }else if(category1 && category2===undefined){
         url = `/api/catalog_system/pub/products/search/${department}/${category1}?sc=1`
    }else if (category1===undefined && category2===undefined){
         url = `/api/catalog_system/pub/products/search/${department}?sc=1`
    }

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