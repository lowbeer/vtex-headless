import React from 'react'

function ProductPage(props) {

    const url = '/api/catalog_system/pub/products/search/samsung-j7/p'

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => {
        return response.json()
    })
        .then((data) => {
            alert(data.length > 0 ? data[0].productName : 'none')
        });


    return (
        <div>

            PDP

        </div>
    )

}

export default ProductPage;
