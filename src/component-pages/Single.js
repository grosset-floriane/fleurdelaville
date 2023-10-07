import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Provider } from '../context/storeContext';
import Article from '../components/Article/Article';


const Single = () => {
    const {pathname} = useLocation()
    const [, postType, slug] = pathname.split('/')

    return (
        <Provider slug={slug} postType={postType}>
        <Header />
        <main className="Post">
            <Article />
        </main>
        </Provider>
    )
}
export default Single;