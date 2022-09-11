import News from "../layout/News";
import Header from "../layout/Header";
import React, { useState } from "react";
const MyApi = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");

    const filteredSearch = news.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    

    React.useEffect(() => {
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=warcraft&lang=en`, {
            method: "GET",
            headers: {
                "x-rapidapi-key":
                    "3f05cf40c2msha439dcea1f48356p1be3dcjsnca91708a52d5",
                "x-rapidapi-host": "free-news.p.rapidapi.com",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setNews(data.articles);
                console.log(data.articles);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    

    return (
        <div>
            {news && <Header search={search} setSearch={setSearch}/>}

            {filteredSearch && <News news={filteredSearch} />}
        </div>
    );
};

export default MyApi;
