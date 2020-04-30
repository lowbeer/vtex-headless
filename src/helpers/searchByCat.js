

export function searchByCatId(department,category1,category2){
   
    const levels = [department, category1, category2].filter(value => value !== undefined)
    const query = levels.join('/')
    const map = levels.map(() => 'c').join(',')

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var graphql = JSON.stringify({
      query: "\n      query ProductSearch($query: String, $map: String){\n           productSearch(query: $query, map:$map) @context(sender: \"vtex.search-graphql@0.x\") {\n               products {\n                   productName,\n                   linkText\n                   \n                }\n            }\n        }\n      \n         \n         \n      \n  \n    \n",
      variables: {"query":"eletronicos/mobile","map":"c,c"}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql
    };
    return fetch("https://thomas.myvtex.com/_v/public/graphql/v1", requestOptions)
      .then(response => response.json())
      .then(result => {
          return result.data.productSearch.products
      })


}


