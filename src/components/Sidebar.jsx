import React from "react";

const Sidebar = () => {
    // // fetch api
    // const [news, setNews] = React.useState([]);
   

    // const getNews = async () => {
    //        const url = `https://free-news.p.rapidapi.com/v1/search?q=warcraft&lang=en`;
    //        const options = {
    //            method: 'GET',
    //            headers: {
    //                'X-RapidAPI-Key': '3f05cf40c2msha439dcea1f48356p1be3dcjsnca91708a52d5',
    //                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
    //            }
    //        };
    //        const response = await fetch(url, options);
    //        const data = await response.json();
    //        setNews(data.articles);
    //        console.log(data.articles);
    //    }
    //    getNews();
       

    //    React.useEffect(() => {
    //       getNews();
    //    }, []);
    // return (
    //     <div>
    //         {news && (
    //             <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
    //             {news.map((item) => (
    //                 // create bootstrap card with image and title
    //                 <div className="card my-2">
    //                     <img
    //                         src={item.media}
    //                         className="card-img-top"
    //                         alt="..."
    //                     />
    //                     <div className="card-body">
    //                         <h5 className="card-title">{item.title}</h5>
                            
    //                         <div className="text-center">
    //                             <a href={item.url} className="btn btn-primary" target="_blank" rel="noreferrer">
    //                                 Read more...
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //         )}

            
    //     </div>
    // );
};

export default Sidebar;
