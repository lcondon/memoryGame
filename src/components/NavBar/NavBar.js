import React from 'react';
import './NavBar.css';

const NavBar = props => (
  <nav className="navbar navbar-dark fixed-top navbar-expand-sm bg-dark justify-content-between align-items-center">
    <h2 className="navBar-brand" id="navTitle">
      STRANGER THINGS MEMORY GAME
    </h2>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">
            SCORE: {props.score || 0}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            HIGH SCORE: {props.highScore || 0}
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
