

export function categoryTree(){
    
    let treeLevel = 3

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var graphql = JSON.stringify({
      query: "query ($treeLevel: Int) {\n  categories(treeLevel: $treeLevel) @context(sender: \"vtex.store-graphql@2.x\") {\n    id\n    name\n    hasChildren\n    children {\n      id\n      name\n    }\n  }\n}",
      variables: {"treeLevel":treeLevel}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql
    };
    return fetch("https://thomas.myvtex.com/_v/public/graphql/v1", requestOptions)
      .then(response => response.json())
      .then(result => (result.data.categories));

}