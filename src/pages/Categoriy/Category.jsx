import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../Home/NewsCart';

const Category = () => {
    
    const {id} = useParams()
    const categoryNews = useLoaderData()

    return (
        <div>
            { id && <h2>this is category: {categoryNews.length}</h2>}
            {
                categoryNews.map((item) => <NewsCart
                key={item._id}
                news = {item}
                ></NewsCart>)
            }
        </div>
    );
};

export default Category;