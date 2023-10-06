import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';

const Single = () => {
    const {slug} = useParams()
    console.log(slug)
    return (
        <>
        <Header />
        <main className="Post">
            this is the page component
        </main>
        </>
    )
}
export default Single;