import React from 'react';
import './navbar.css'; // Стили для NavBar

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{position: "fixed", height: '80px', justifyContent: "center", alignItems: "center"}}>
            <div className="container" style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center", width: '100%'}}>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav" style={{display: "flex", width: '100%', justifyContent: "center"}}>
                    <ul className="navbar-nav">
                        <div className="nav-item-left">
                            <li className="nav-item">
                                <a href="#what-we-do" className="nav-link"
                                   style={{
                                       background: "transparent",
                                       textDecoration: "none",
                                       // marginRight: "25px",
                                       // marginLeft: "25px"
                                }}>
                                    <span className="nav-text">What We Do</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link"
                                   style={{
                                       background: "transparent",
                                       textDecoration: "none",
                                   }}>
                                    <span className="nav-text">Portfolio</span>
                                </a>
                            </li>
                        </div>
                        <li className="nav-item" style={{justifyContent: "center"}}>
                            <div className="nav-link center-link">
                                <span className="nav-text" style={{fontSize: "65px", fontWeight: 350}}>Kanzu</span>
                            </div>
                        </li>
                        <div className="nav-item-right">
                            <li className="nav-item">
                                <a href="#feedback" className="nav-link"
                                   style={{
                                       background: "transparent",
                                       textDecoration: "none",
                                   }}>
                                    <span className="nav-text">Feedback</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link"
                                   style={{
                                       background: "transparent",
                                       textDecoration: "none",
                                       // marginRight: "25px",
                                       // marginLeft: "25px"
                                   }}>
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
