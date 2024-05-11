// import React, { useState, useEffect } from 'react';
import './landing.css'; // Подключаем стили
import CarouselBox from "./CarouselBox"
import Kanzu from "../../assets/Kanzu1.png"
import "./landingWhatWeDo.css"

const Landing = () => {
    return (
        <div>
            {/*<CarouselBox/>*/}
            <section id="what-we-do" className="section">
                <div className="content">
                    <div className="image-container">
                        <img src={Kanzu} alt="What We Do"/>
                        <div className="overlay overlay-what-we-do">
                            <h1 style={{fontSize: "30px"}}>What We Do</h1>
                            <div className="overlay-what-we-do">
                                <h2 className="move-wwd-1">automation</h2>
                                <h2 className="move-wwd-2">website</h2>
                                <div className="move-wwd-block-1">
                                    <h2 className="move-wwd-3">Experience</h2>
                                    <h2 className="move-wwd-4">chat-bot</h2>
                                    <h2 className="move-wwd-5">magic</h2>
                                </div>
                                <h2 className="move-wwd-6">parsing</h2>
                                <h2 className="move-wwd-7">app</h2>
                            </div>
                            <table style={{marginTop: "60px",}}>
                                <tr>
                                    <td>
                                        <div style={{
                                            marginRight: "150px",
                                            width: "350px",
                                            height: "70px",
                                            display: "flex",
                                            alignItems: "center",
                                            border: "2px solid #000000",
                                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                            borderRadius: "5px"
                                        }}>At Kanzu we develop job-perfect IT projects that meet both the needs and the eye</div>
                                    </td>
                                    <td>
                                        <a href="#contact" style={{textDecoration: "none", color: "white"}} type="button">
                                            <div>
                                                <div style={{
                                                    marginLeft: "150px",
                                                    width: "160px",
                                                    height: "45px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: "22px",
                                                    justifyContent: 'center',
                                                    border: "2px solid #000000",
                                                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
                                                    borderRadius: "5px",
                                                    backgroundColor: "black",
                                                }}>
                                                    Start project
                                                </div>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            </div>
                        </div>
                    </div>
            </section>

            <section id="portfolio" className="section">
                <div className="content">
                    <div className="image-container">
                        <img src={Kanzu} alt="Portfolio"/>
                        <div className="overlay">
                            <h2>Portfolio</h2>
                            <p>Proin varius imperdiet mauris, vel fermentum lorem ultricies ac. In ac nisi varius,
                                feugiat enim sit amet, convallis nunc.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="feedback" className="section">
                <div className="content">
                    <div className="image-container">
                        <img src={Kanzu} alt="Feedback"/>
                        <div className="overlay">
                            <h2>Feedback</h2>
                            <p>Integer id ipsum nec libero tincidunt semper. Aliquam erat volutpat. Sed ac enim nec sem
                                consectetur viverra.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="content">
                    <div className="image-container">
                        <img src={Kanzu} alt="Contact"/>
                        <div className="overlay">
                            <h2>Contact</h2>
                            <p>Maecenas consequat, odio ac malesuada pharetra, justo risus dignissim justo, ut
                                vestibulum magna lacus id justo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*<div className="landing-content">*/}
            {/*    /!* Первая картинка *!/*/}
            {/*    <div className="main-image">*/}
            {/*        <img*/}
            {/*            src={ KanzuLogo }*/}
            {/*            alt="Main Image"*/}
            {/*            className=" d-block w-100 responsive-image"/>*/}
            {/*    </div>*/}
            {/*    /!* Вторая картинка, показывается при прокрутке страницы вниз *!/*/}
            {/*    /!*{isVisible && (*!/*/}
            {/*    /!*    <div className="scroll-image">*!/*/}
            {/*    /!*        <img src={KanzuLogo} alt="Second Image" />*!/*/}
            {/*    /!*    </div>*!/*/}
            {/*    /!*)}*!/*/}
            {/*</div>*/}
        </div>
    );
}

export default Landing;
