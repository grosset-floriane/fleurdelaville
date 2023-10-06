import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import { Provider } from '../context/storeContext';
import Loop from '../context/Loop';


const Single = () => {
    const {slug} = useParams()

    return (
        <Provider router={slug}>
        <Header />
        <main className="Post">
            this is the page component
            <Loop />
        </main>
        </Provider>
    )
}
export default Single;