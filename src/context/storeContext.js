import React, { useEffect, useState } from "react";
import axios from "axios";

export const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

const BASE_URL = '/wp-json/wp/v2/'

const setURL = (postType, slug) => {
    switch(postType) {
        case 'exhibitions':
        case 'works':
            if(slug === postType) return slug
            return `${postType}?slug=${slug}`
        case 'pages':
            return `pages?slug=${slug}`
        default:
            return 'pages?=home'
    }
}

export const Provider = ({children, slug, postType}) => {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(slug)
    const [url, setUrl] = useState('')
    console.log(posts)

    // useEffect(() => {
    //     console.log('set url')
    //     setUrl(() => {
    //         switch(postType) {
    //             case 'exhibitions':
    //             case 'works':
    //                 if(slug === postType) return slug
    //                 return `${postType}?slug=${slug}`
    //             case 'pages':
    //                 return `pages?slug=${slug}`
    //             default:
    //                 return 'pages?=home'
    //         }
    //     })
    // }, [slug, postType])

    useEffect(() => {
        if(!isLoading && slug !== undefined) {
                setIsLoading(true)
                axios.get(`${BASE_URL}${setURL(postType, slug)}`).then((response) => setPosts(response.data)).finally(() => setIsLoading(false))
        }
    }, [postType, slug])

    return (
        <storeContext.Provider value={posts}>
        {children}
      </storeContext.Provider>
    )
}