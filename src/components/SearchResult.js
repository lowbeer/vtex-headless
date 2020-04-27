import React, { useState, useEffect } from 'react'
import {searchByCatId} from '../helpers/searchByCat'


function SearchPage(props) {
    let [searchResult, setSearchResult] = useState(null)
    useEffect(()=>{
        const params = props.match.params
        searchByCatId(params.department, params.category1, params.category2).then((result) => {
            setSearchResult(result)
        })
    },[props.match.params.department,props.match.params.category1,props.match.params.category2])

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

// /electronics/mobile/