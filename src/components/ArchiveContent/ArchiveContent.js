import React from 'react';
import { useContext } from 'react';
import {storeContext} from '../../context/storeContext' 
import { Link } from 'react-router-dom';
import FeaturedImage from './FeaturedImage';

const ArchiveContent = () => {
    const {posts} = useContext(storeContext)
    if(!posts) return null

    return (
        <ul>
            {posts.map(({title, slug, _links, link: postLink}) => {
                console.log(postLink)
                return ( 
            <li key={slug}>
                <h2>{title.rendered}</h2>
                <Link to={postLink}><FeaturedImage url={_links["wp:featuredmedia"][0].href} alt={title.rendered}/></Link>
            </li>
            )}) }
        </ul>
    );
};

export default ArchiveContent;