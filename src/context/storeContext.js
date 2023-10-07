import React, { useEffect, useState } from "react";
import axios from "axios";
import { POST_TYPES } from "./constants";

export const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

const BASE_URL = '/wp-json/wp/v2/'

const setURL = (postType, slug) => {
    switch(postType) {
        case POST_TYPES.EXHIBITIONS.slug:
        case POST_TYPES.WORKS.slug:
            if(slug === postType) return slug
            return `${postType}?slug=${slug}`
        case POST_TYPES.PAGES.slug:
            return `pages?slug=${slug}`
        default:
            return 'pages?=home'
    }
}

export const Provider = ({children, slug, postType}) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(!isLoading && slug !== undefined) {
                setIsLoading(true)
                axios.get(`${BASE_URL}${setURL(postType, slug)}`).then((response) => setPosts(response.data)).finally(() => setIsLoading(false))
        }
    }, [postType, slug])

    return (
        <storeContext.Provider value={{posts, postType, slug}}>
        {children}
      </storeContext.Provider>
    )
}