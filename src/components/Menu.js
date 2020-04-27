import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { categoryTree } from '../helpers/categoryTree';



function Menu(){

    let [catTree, setCatTree] = useState([])
    useEffect(()=>{
   
    categoryTree().then(result => {
            setCatTree(result.map(value => ({
                id:value.id, 
                name:value.name,
                hasChildren:value.hasChildren,
                children:value.children,
            })))
        })
    },[])

    return(
        <div>
        <ul>
            {
                catTree.map(value => {
                    return <li> 
                    <Link to={`/${value.name}/search`}>{value.name}</Link> 
                    {
                        value.hasChildren ? value.children.map(child => {
                            return <li> 
                                <Link to={`/${value.name}/${child.name}/search`}>{child.name}</Link> 
                            </li>
                        }):null          
                    }
                  </li>
                })
            }
          
        </ul>
      </div>
    )

}

export default Menu;
