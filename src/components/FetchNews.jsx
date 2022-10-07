import { Card, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/
const FetchNews = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const url = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setNews(data)
                setIsLoading(false)
            });
    });

    return (
        <div>
            <h1>Noticias</h1>
            {
             isLoading ? (<CircularProgress />) : (         
                news.map((dado) => (
                <div key={dado.id}>
                    <div>{dado.title}</div>
                    <div>{dado.body}</div>
                </div>
            ))
        )}
        </div>
    );
};

export default FetchNews;