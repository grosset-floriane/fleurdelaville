import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Provider } from '../context/storeContext';
import Loop from '../context/Loop';


const Single = () => {
    const {pathname} = useLocation()
    const [, postType, slug] = pathname.split('/')

    return (
        <Provider slug={slug} postType={postType}>
        <Header />
        <main className="Post">
            this is the page component
            <Loop />
        </main>
        </Provider>
    )
}
export default Single;