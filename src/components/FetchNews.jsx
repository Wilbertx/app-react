import React, { useState } from 'react'
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

    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((responde)=> response.json())
    .then((data) => {
        setNews(data)
        console.log(news)
    })
    .catch(error)

    return (
        <div>
            <h1>Noticias</h1>
        </div>

        )
    }

export default FetchNews;