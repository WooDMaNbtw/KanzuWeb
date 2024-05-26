import './landing.css'; // Подключаем стили
import LandingFirstPage from "./FirstPage/landingFirstPage";
import LandingWhatWeDo from "./WhatWeDo/landingWWD";
import LandingPortfolio from "./portfolio/landingPortfolio";
import LandingContact from "./Contact/landingContact";
import TeamTechWWD from "./TeamTechWWD/TeamTechWWD";
import LandingFeedback from "./Feedback/landingFeedback";


const Landing = () => {
    return (
        <div>
            <LandingFirstPage/>
            <LandingWhatWeDo/>
            <TeamTechWWD/>
            <LandingPortfolio/>
            <LandingFeedback/>
            <LandingContact/>

            {/*<section id="portfolio" className="section">*/}
            {/*    <div className="content">*/}
            {/*        <div className="image-container">*/}
            {/*            <img src={Kanzu} alt="Portfolio"/>*/}
            {/*            <div className="overlay">*/}
            {/*                <h2>Portfolio</h2>*/}
            {/*                <p>Proin varius imperdiet mauris, vel fermentum lorem ultricies ac. In ac nisi varius,*/}
            {/*                    feugiat enim sit amet, convallis nunc.</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}





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
