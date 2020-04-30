import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {productBySlug} from '../helpers/productBySlug'


function ProductPage(props) {
    let [product,setProduct] = useState(null)
    useEffect(()=>{
        productBySlug(props.match.params.slug).then(setProduct)
    },[props.match.params.slug])


    return (
        <div>

            PDP
        
            {product ? product.productName : 'loading' }

        </div>
    )

}
export default ProductPage;
