import React from 'react';
import Header from '../components/Header/Header';
import { Provider } from '../context/storeContext'
import Loop from '../context/Loop'
import { useLocation } from 'react-router-dom';

const Page = () => {
    const {pathname} = useLocation()
    const [, slug] = pathname.split('/')
    return (
        <Provider postType='pages' slug={slug}>
            <Header />
            <main className="Post">
                this is the page page component
                <Loop />
            </main>
        </Provider>
    )
}
export default Page;