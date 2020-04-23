import React from 'react'

function PDP(props){

    const url = `https://thomas.myvtex.com/api/catalog_system/pub/products/search/samsung-j7/p`
 
    console.log(url)


 fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://localhost:3000'
  }
}).then((response) => {
    return response;
  })
  .then((data) => {
    console.log(data);
  });

  

    return(
        <div>

PDP
    productLink={props.match.params.slug}



        </div>
    )

}

export default PDP;
