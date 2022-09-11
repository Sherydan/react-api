import News from "../layout/News";
import Header from "../layout/Header";
import React, { useState } from "react";
import Herocard from "../components/Herocard";
const MyApi = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    React.useEffect(() => {
        // fetch using async await
        const fetchNews = async () => {
            const response = await fetch(
                `https://free-news.p.rapidapi.com/v1/search?q=warcraft&lang=en`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key":
                            "3f05cf40c2msha439dcea1f48356p1be3dcjsnca91708a52d5",
                        "x-rapidapi-host": "free-news.p.rapidapi.com",
                    },
                }
            );
            const data = await response.json();
            setNews(data.articles);
        };
        fetchNews();
    }, []);

    let filteredSearch = [];
    if (news) {
        filteredSearch = news.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });
    }

    console.log(filteredSearch);

    return (
        <div>
            <Header search={search} setSearch={setSearch} />
            <div className="container">
                <Herocard news={news && (news[0])} />
            </div>
            <News news={filteredSearch && (filteredSearch)} />
        </div>
    );
};

export default MyApi;
