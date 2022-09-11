import React from "react";
import Herocard from "../components/Herocard";
import Sidebar from "../components/Sidebar";
const Newslist = () => {
    // fetch api
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        setLoading(true);
        fetch(
            "https://newsapi.org/v2/everything?q=warcraft&sortBy=relevancy&apiKey=4064ace96b154b88af5a1c2456062b67"
        )
            .then((res) => res.json())
            .then((data) => {
                setNews(data.articles);
                setLoading(false);
                console.log(data.articles);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <Herocard />

                            <ul className="list-group">
                                <li className="list-group-item">
                                    {news.map((item) => (
                                        <div className="row mb-4">
                                            <div className="col-md-3">
                                                <img src={item.urlToImage} alt="" className="img-fluid" />
                                            </div>

                                            <div className="col-md-9">
                                                <ul>
                                                    <li><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>
                                                    <li><a href={item.url} target="_blank" rel="noopener noreferrer">{item.description}</a></li>
                                                    <li>
                                                        <span>{item.author}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newslist;
