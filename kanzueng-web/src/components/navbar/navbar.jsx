import React from 'react';
import './navbar.css'; // Стили для NavBar

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{position: "fixed"}}>
            <div className="container">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <div className="nav-item-left">
                            <li className="nav-item">
                                <a href="#what-we-do" className="nav-link" style={{background: "transparent"}}>
                                    <span className="nav-text">What We Do</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link" style={{background: "transparent"}}>
                                    <span className="nav-text">Portfolio</span>
                                </a>
                            </li>
                        </div>
                        <li className="nav-item">
                            <div className="nav-link center-link">
                                <span className="nav-text" style={{fontSize: "30px"}}>Kanzu</span>
                            </div>
                        </li>
                        <div className="nav-item-right">
                            <li className="nav-item">
                                <a href="#feedback" className="nav-link" style={{background: "transparent"}}>
                                    <span className="nav-text">Feedback</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link" style={{background: "transparent"}}>
                                    <span className="nav-text">Contact</span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
