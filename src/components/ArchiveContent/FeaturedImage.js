import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedImage = ({url, alt}) => {
    const [image, setImage] = useState()
    useEffect(() => {
        axios.get(url).then((response) => setImage(response.data))
    }, [url])

    if(!image) return null

    return (
        <img alt={alt} src={image.source_url} />
    );
};

export default FeaturedImage;