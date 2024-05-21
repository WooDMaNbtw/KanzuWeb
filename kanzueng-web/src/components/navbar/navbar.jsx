import React from 'react';
import './navbar.css'; // Стили для NavBar
import Logo from "../../assets/logo.png"


const NavBar = () => {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <nav className="navbar navbar-expand-lg" style={{position: "fixed", height: '60px', justifyContent: "center", alignItems: "center"}}>
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
                                        <span className="nav-text">what we do</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#portfolio" className="nav-link"
                                       style={{
                                           background: "transparent",
                                           textDecoration: "none",
                                       }}>
                                        <span className="nav-text">portfolio</span>
                                    </a>
                                </li>
                            </div>
                            <li className="nav-item" style={{justifyContent: "center"}}>
                                <a href="#" className="nav-link center-link" style={{background: "transparent", cursor: "pointer", textDecoration: "none"}}>
                                    <img src={Logo} alt="logo" style={{maxWidth: "150px", }}/>
                                </a>
                            </li>
                            <div className="nav-item-right">
                                <li className="nav-item">
                                    <a href="#feedback" className="nav-link"
                                       style={{
                                           background: "transparent",
                                           textDecoration: "none",
                                       }}>
                                        <span className="nav-text">feedback</span>
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
                                        <span className="nav-text">contact</span>
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
