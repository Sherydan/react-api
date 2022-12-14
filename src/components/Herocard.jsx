import React from "react";

const Herocard = ({news}) => {
    return (
        <div>
            {/* do something only if props.news is not null */}
            {news && (
                <div>
                    {/*  create a card for news items */}
                    <div
                        className="p-4 p-md-5 mb-4 rounded text-bg-dark"
                        id="heroCard"

                        style={{
                            
                            backgroundImage: `url(${news.media})`,
                            opacity: "0.8",
                            backgroundSize: "cover",
                        }}
                    >
                        <div className="col-md-6 px-0">
                            <h1 className="display-4 fst-italic">
                                {news.title}
                            </h1>
                            <p className="lead my-3">
                                {news.description}
                            </p>
                            <p className="lead mb-0">
                                <a
                                    href={news.link}
                                    className="text-white fw-bold"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Continue reading...
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Herocard;
