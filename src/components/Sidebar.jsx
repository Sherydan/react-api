import React from "react";

const Sidebar = () => {
    // fetch api
    const [news, setNews] = React.useState([]);

    React.useEffect(() => {

        setTimeout(()=>{
            const fetchNews = async () => {
                const response = await fetch(
                    `https://free-news.p.rapidapi.com/v1/search?q=games&page_size=5&lang=en`,
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
            // added a delay because the api only allws 1 call per sec and thus crested the error when loading the page when both calls were made at the same time
           }, 1500)
        
        
    }, []);



       
    return (
        <div>
            
            {news && (
                <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                    {news.map((item) => (
                        
                        // create bootstrap card with image and title
                        <div key={news._id} className="card my-2">
                            <img
                                src={item.media}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>

                                <div className="text-center">
                                    <a
                                        href={item.link}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Read more...
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Sidebar;
