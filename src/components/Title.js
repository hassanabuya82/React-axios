import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";

const Title = () => {
  useEffect(() => {
    // Initialize Bootstrap navbar functionality
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarToggler.addEventListener("click", () => {
      navbarCollapse.classList.toggle("show");
    });
  }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="abuya/1">
                FirstRequest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="abuya/2">
                Dad's Joke
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="abuya/3">
                Post Request
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="abuya/4">
                GlobalInstance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="abuya/5">
                CustomInstance
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="abuya/6">
                Interceptors
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Title;
