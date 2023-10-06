import React, { useEffect, useState } from "react";
export const storeContext = React.createContext();

export const Consumer = storeContext.Consumer;

export const Provider = ({children, router}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        setPosts(['title', 'title2'])
        if(router) setPosts((prevState) => [...prevState, router])
    }, [])

    return (
        <storeContext.Provider value={posts}>
        {children}
      </storeContext.Provider>
    )
}