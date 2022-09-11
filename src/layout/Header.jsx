import React from "react";
const Header = ({ search, setSearch }) => {
    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2 active"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                FAQs
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                About
                            </a>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="localhost:3000"
                                className="nav-link link-dark px-2"
                            >
                                Sign up
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a
                        href="/"
                        className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
                    >
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-2 text-white">Gaming news</span>
                    </a>
                    <form
                        className="col-12 col-lg-auto mb-3 mb-lg-0"
                        role="search"
                    >
                        {/* we set the value to search and setSearch state to the value of the inoput */}
                        <input
                            value={search}
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
            </header>
        </>
    );
};

export default Header;
