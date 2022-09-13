
import Sidebar from "../components/Sidebar";
const Newslist = (props) => {    
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <ul className="list-group">
                            <li className="list-group-item">
                                {/* loop through news only if is not null */}
                                {(props.news && 
                                    
                                    props.news.map((item) => (
                                    
                                    <div key={props.news._id} className="row mb-4">
                                        <div className="col-md-3">
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <img
                                                    src={item.media}
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>

                                        <div className="col-md-9 ">
                                            <ul>
                                                <li>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="fs-4 fw-bolder text-dark"
                                                    >
                                                        {item.title}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="fs-6 text-dark"
                                                    >
                                                        {item.summary}
                                                    </a>
                                                </li>
                                                <li>
                                                    <span className="fs-6">
                                                        Author:
                                                        <strong>
                                                            {item.author}
                                                        </strong>
                                                        <span className="text-muted">
                                                            {
                                                                item.published_date
                                                            }
                                                        </span>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ))
                                
                                )}
                                
                                
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslist;
