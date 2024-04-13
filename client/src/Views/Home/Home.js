import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Home.css';
import NewsArticle from '../../Component/NewsArticle/NewsArticle';

function Home() {
    const [news,setNews]=useState([]);
    const [query,setQuery]=useState("Pune")
    
    const loadNews = async()=>{
        try{

        const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2024-04-12&to=2024-04-12&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);

        setNews(response.data.articles);
        }
        catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        loadNews()

    },[]);

    useEffect(()=>{
        loadNews()

    },[query])
  return (
    <div>
      <h1 className='heading'>News App</h1>
      <input type='text' value={query} className='search' onChange={(e)=>{setQuery(e.target.value)}} placeholder='Search'></input>
      <div className='news-container'>
      {
        news.map((newsArticle,index)=>{
            const{author,title,description,url,urlToImage,publishedAt,content}=newsArticle;
            return(
                <NewsArticle author={author} title={title} description={description} url={url} urlToImage={urlToImage} publishedAt={publishedAt} content={content}></NewsArticle>
            )
        })
      }
      </div>
    </div>
  )
}

export default Home
