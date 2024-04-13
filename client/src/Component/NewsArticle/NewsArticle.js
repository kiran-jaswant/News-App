import React from 'react';
import './NewsArticle.css'

function NewsArticle(props) {
    const{author,title,description,url,urlToImage,publishedAt,content}=props;
    return (
        <div className='news-card'>
            <img src={urlToImage} className='article-img'></img>
            <h3>{title}</h3>
            <div className='info'>
                <p className='author'>{author}</p>
                <p className='publisher'>{publishedAt}</p>
            </div>
            <p className='description'>{description}</p>
            <a href={url} target='blank' className='btn-read'>Read More</a>
            
        </div>
    )
}

export default NewsArticle
