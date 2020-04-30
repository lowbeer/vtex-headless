

export function productBySlug(slug){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var graphql = JSON.stringify({
    query: "query ($slug: String){\n  product(slug: $slug) @context(sender: \"vtex.search-graphql@0.x\") {\n    productName\n  }\n}",
    variables: {"slug": slug}
    })
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: graphql
    };
    return fetch("https://thomas.myvtex.com/_v/public/graphql/v1", requestOptions)
    .then(response => response.json())
    .then(result => {
        return result.data.product
    })

}

