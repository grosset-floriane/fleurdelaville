import React from 'react';
import Header from '../components/Header/Header';
import { Provider } from '../context/storeContext'
import Loop from '../context/Loop'

const Page = () => {
    return (
        <Provider>
            <Header />
            <main className="Post">
                this is the page page component
                <Loop />
            </main>
        </Provider>
    )
}
export default Page;