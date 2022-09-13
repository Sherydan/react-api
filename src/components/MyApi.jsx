import News from "../layout/News";
import Header from "../layout/Header";
import { useEffect, useState } from "react";
import Herocard from "../components/Herocard";
import OrderBy from "../components/OrderBy";
const MyApi = () => {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        // fetch using async await
        const fetchNews = async () => {
            const response = await fetch(
                // base url
                `https://free-news.p.rapidapi.com/v1/search?q=warcraft&lang=en`,
                {
                    method: "GET",
                    headers: {
                        // send api key and host
                        "x-rapidapi-key":
                            "3f05cf40c2msha439dcea1f48356p1be3dcjsnca91708a52d5",
                        "x-rapidapi-host": "free-news.p.rapidapi.com",
                    },
                }
            );
            const data = await response.json();
            // set state
            setNews(data.articles);
        };
        // call function
        fetchNews();
    }, []);


    // SORT SECTION
    let filteredSearch = [];
    // if news is not empty, filter the news array
    if (news) {
        // sort news by newes or oldest
        if (sort === "newest") {
            
            filteredSearch = news.sort((a, b) => {
                return new Date(b.published_date) - new Date(a.published_date);
            });
        } else if (sort === "oldest") {
            filteredSearch = news.sort((a, b) => {
                return new Date(a.published_date) - new Date(b.published_date);
            });
        }

         // END SORT SECTION


         
        // filter news by search input
        filteredSearch = news.filter((item) => {
            return item.title.toLowerCase().includes(search.toLowerCase());
        });
    }

   

    return (
        <div>

            {/* send search props to header components so we can manage search state */}
            <Header search={search} setSearch={setSearch} />
            
            <div className="container">
                {/* send first item from news state to herocard only if news is not empty */}
                <Herocard news={news && (news[0])} />
            </div>
            {/* send sort and setSort states to orderBy component */}
            <OrderBy sort={sort} setSort={setSort} />
            {/* send filtered search variable to news component, the filtered search has all news, so we can filter it when search is required */}
            <News news={filteredSearch && (filteredSearch)} />
        </div>
    );
};

export default MyApi;
