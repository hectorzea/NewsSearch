import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {

    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);
    //
    useEffect(() => {
        const checkAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=ade1e622362b41c287732af1311dc359`
            const response = await fetch(url);
            const news = await response.json();
            setNews(news.articles);
            console.log(news);
        };
        checkAPI();
    }, [category]);

    return (
        <Fragment>
            <Header title={"News Finder"}/>
            <div className="container white">
                <Form setCategory={setCategory}/>
                <NewsList news={news}/>
            </div>
        </Fragment>
    );
}

export default App;
