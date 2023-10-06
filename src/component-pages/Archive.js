import React from 'react';
import Header from '../components/Header/Header';
import Loop from '../context/Loop';
import { Provider } from '../context/storeContext';
import { useLocation } from 'react-router-dom';

const Archive = () => {
    const {pathname} = useLocation()

    return (
        <Provider router={pathname}>
        <Header />
        <main className="Archive">
            this is the archive page 
            <Loop/>
        </main>
        </Provider>
    )
}
export default Archive;