import React from 'react';
import Header from '../components/Header/Header';
import ArchiveContent from '../components/ArchiveContent/ArchiveContent';
import { Provider } from '../context/storeContext';
import { useLocation } from 'react-router-dom';
import { POST_TYPES } from '../context/constants';

const Archive = () => {
    const {pathname} = useLocation()
    const [, postType] = pathname.split('/')

    return (
        <Provider postType={postType} slug={postType}>
        <Header />
        <main className="Archive">
            <h1>{postType === POST_TYPES.EXHIBITIONS.slug ? POST_TYPES.EXHIBITIONS.title : POST_TYPES.WORKS.title}</h1>
            <ArchiveContent/>
        </main>
        </Provider>
    )
}
export default Archive;