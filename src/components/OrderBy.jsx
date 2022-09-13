import React from "react";

const OrderBy = ({ sort, setSort }) => {
    // handle sort change
    const handleSort = (e) => {
        e.preventDefault();
        // set sort sate to value of clicked button	
        setSort(e.target.innerText.toLowerCase());
    };

    return (
        <>
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Order By
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="localhots"
                                        
                                        onClick={handleSort}
                                    >
                                        Newest
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item"
                                        href="localhost"
                                        
                                        onClick={handleSort}
                                    >
                                        Oldest
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9">
                        hola
                        {sort && <p className="text-white fs-3">Sorted By: {sort}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderBy;
