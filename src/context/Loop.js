import React from 'react';
import { useContext } from 'react';
import {storeContext} from './storeContext' 

const Loop = () => {
    const posts = useContext(storeContext)

    return (
        posts.map(function({title,content},i){
            return <>
            <h1 key={i}>{title.rendered}</h1>
            <div className="post-content" dangerouslySetInnerHTML={{__html:content.rendered}}></div>
            </>
          }) 
    )

    
};
export default Loop