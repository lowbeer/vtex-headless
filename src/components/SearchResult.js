import React, { useState, useEffect } from 'react'
import {searchByCatId} from '../helpers/searchByCat'


function SearchPage(props) {
    let [searchResult,setSearchResult] = useState(null)
    useEffect(()=>{
        searchByCatId(props.match.params.department,props.match.params.category).then(setSearchResult)
    },[props.match.params.department,props.match.params.category])

    if (!searchResult){
        return <div> NOT FOUND </div>
    }
    return (
        <div>

            Search Result
             <ul> 
                {searchResult.map(product => {
                    return <li>
                        {product.productName}
                    </li>
                })}
            </ul>
        </div>
    )

}

export default SearchPage;
