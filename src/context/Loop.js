import React from 'react';
import { useContext } from 'react';
import {storeContext} from './storeContext' 

const Loop = () => {
    const posts = useContext(storeContext)

    return (
        posts.map(function(item,i){
            return <div key={i}>{item}</div>
          }) 
    )

    
};
export default Loop