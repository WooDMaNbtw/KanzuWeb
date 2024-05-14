import './landing.css'; // Подключаем стили
import Kanzu from "../../assets/Kanzu1.png"
import LandingFirstPage from "./whatwedo/landingFirstPage";

const Landing = () => {
    return (
        <div>
            <LandingFirstPage/>

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
