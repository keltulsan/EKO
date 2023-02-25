import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const getAllNews = async () => {
    const response = await fetch(
        'http://localhost:4444/news/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const news = await response.json()
    return news
}
export default function News() {
    const [news, setNews] = useState([]);
    const [res, setRes] = useState([]);

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
    })


    useEffect(() => {
        const newsFetched = getAllNews();
        newsFetched
            .then(result => setNews(result))
            .catch(error => console.error('Erreur avec notre API :', error.message));
    }, []);
    useEffect(() => {
        setRes(news.map((val, key) => {
            return <div key={key} className="flex vertical align-vertical">
                <h2 className='title flex center align-center'>{val.desc} </h2>
                <div className='flex center align-center '>
                    <img className="icon-carousel " src={val.img} alt="Image d'article sur Eko" />
                </div>
                <p className='text flex center align-center'>{val.desc} </p>
            </div>
        }))

    }, [news]);
    return <div className="container">
        <h1 className="title top stroke">News</h1>
        <p className="text"></p>
        <div className='flex center'>
            <Carousel className='slide' width={dimensions.width <= 750 ? "300px" : "1000px"}>
                {res}
            </Carousel>
        </div>

    </div>

}

